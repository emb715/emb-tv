import { useEffect, useRef, useCallback } from "react";
// @ts-ignore
import * as shaka from "shaka-player/dist/shaka-player.ui";
import "shaka-player/dist/controls.css";
import "./css/youtube-theme.css";
import "./css/controls.css";

import type { Channel } from "../../data/mock_channels";

const toggleFullScreen = (element: HTMLElement | null) => {
  if (element && !document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    element.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const FULLSCREEN = "fullscreen";
const FULLSCREEN_EXIT = "fullscreen_exit";
const ARIA_LABEL = {
  FULLSCREEN: "Full Screen",
  FULLSCREEN_EXIT: "Exit Full Screen",
};

class CustomFullScreenButton extends shaka.ui.Element {
  button_: HTMLButtonElement;
  parent = super.parent;
  eventManager = super.eventManager;
  controls = super.controls;
  static Factory: typeof shaka.ui.Factory;

  constructor(parent: any, controls: any) {
    super(parent, controls);

    this.button_ = document.createElement("button");
    this.button_.classList.add("shaka-fullscreen-button");
    this.button_.classList.add("material-icons-round");
    this.button_.classList.add("shaka-tooltip");
    this.button_.textContent = FULLSCREEN;

    this._updateAriaLabel();

    this._checkSupport();

    this.parent.appendChild(this.button_);

    // Listen for clicks on the button to start the next playback
    this.eventManager.listen(this.button_, "click", (e: any) => {
      var _appContainer = document.getElementById("app");
      toggleFullScreen(_appContainer);
    });
    this.eventManager.listen(document, "fullscreenchange", () => {
      var isFullScreenEnabled = this.controls.isFullScreenEnabled();
      this.button_.textContent = isFullScreenEnabled
        ? FULLSCREEN_EXIT
        : FULLSCREEN;

      this.button_.ariaLabel = isFullScreenEnabled
        ? "Exit Full Screen"
        : "Full Screen";
      this._updateIcon();
      this._updateAriaLabel();
    });
  }

  _checkSupport() {
    // Don't show the button if fullscreen is not supported
    if (!this.controls.isFullScreenSupported()) {
      this.button_.classList.add("shaka-hidden");
    } else {
      this.button_.classList.remove("shaka-hidden");
    }
  }

  _updateIcon() {
    const isFullScreenEnabled = this.controls.isFullScreenEnabled();

    this.button_.textContent = isFullScreenEnabled
      ? FULLSCREEN_EXIT
      : FULLSCREEN;
  }

  _updateAriaLabel() {
    const isFullScreenEnabled = this.controls.isFullScreenEnabled();

    this.button_.ariaLabel = isFullScreenEnabled
      ? ARIA_LABEL.FULLSCREEN_EXIT
      : ARIA_LABEL.FULLSCREEN;
  }
}

// Factory that will create a button at run time.
CustomFullScreenButton.Factory = class {
  create(rootElement: any, controls: any) {
    return new CustomFullScreenButton(rootElement, controls);
  }
};

type ShakaPlayerProps = {
  channel: Channel;
};
const ShakaPlayer = ({ channel }: ShakaPlayerProps) => {
  // const appContainer = useRef<HTMLDivElement>(appRef.current);
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoComponent = useRef<HTMLVideoElement>(null);

  const playerInstance = useRef<shaka.Player>(null);
  const uiInstance = useRef<shaka.ui>(null);

  const currentConnection = channel.connections[0];

  const onErrorEvent = (event: shaka.Player.ErrorEvent) => {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  };

  const onError = (error: shaka.Player.ErrorEvent) => {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  };

  const initPlayer = () => {
    //Getting reference to video and video container on DOM
    const videoElement = videoComponent.current;
    const videoContainerElement = videoContainer.current;

    //Initialize shaka player
    var localPlayer = new shaka.Player(videoElement);

    //register controls
    shaka.ui.Controls.registerElement(
      "custom-fullscreen",
      new CustomFullScreenButton.Factory()
    );

    //Setting up shaka player UI
    const ui = new shaka.ui.Overlay(
      localPlayer,
      videoContainerElement,
      videoElement
    );

    const config = {
      enableTooltips: true,
      // addSeekBar: false,
      singleClickForPlayAndPause: false,
      controlPanelElements: [
        "play_pause",
        "time_and_duration",
        "mute",
        "spacer",
        "captions",
        "language",
        "quality",
        // "custom-fullscreen",
        // "spacer",
        "cast",
        "fullscreen",
        // "overflow_menu",
      ],
      // overflowMenuButtons: ["quality", "language", "picture_in_picture"],
      customContextMenu: true,
      contextMenuElements: ["statistics"],
      seekBarColors: {
        adBreaks: "rgb(255, 204, 0)",
        base: "rgba(255, 255, 255, 0.35)",
        buffered: "rgba(255, 255, 255, 0.6)",
        // played: "rgb(255, 255, 255)",
        played: "rgb(213 58 157)",
      },
    };
    ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();
    const video = controls.getVideo();

    // Listen for error events.
    player.addEventListener("error", onErrorEvent);

    return {
      player,
      video,
      ui,
      controls,
    };
  };

  const loadPlayer = () => {
    if (!playerInstance.current) return;
    playerInstance.current
      .load(currentConnection.url)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch(onError); // onError is executed if the asynchronous load fails.
  };

  const getPlayerConfig = () => {
    switch (currentConnection.type) {
      case "clearkey":
        const [keyId, key] = currentConnection.license.split(":");

        return {
          drm: {
            clearKeys: {
              [`${keyId}`]: key,
            },
          },
        };
      case "widevine":
        return {
          drm: {
            servers: {
              "com.widevine.alpha": currentConnection.license,
            },
          },
        };

      default:
        return {};
    }
  };

  const onChangeChannel = () => {
    if (!playerInstance.current) return;
    loadPlayer();
    playerInstance.current.configure(getPlayerConfig());
  };
  const onChangeChannelMemo = useCallback(onChangeChannel, [channel.id]);

  useEffect(() => {
    const { player, ui } = initPlayer();
    playerInstance.current = player;
    uiInstance.current = ui;
    loadPlayer();
    return () => {
      // Destroy the player
      player.destroy();
      // Destroy the UI
      ui.destroy();
    };
  }, []);

  useEffect(() => {
    // playerInstance
    onChangeChannelMemo();
  }, [channel.id]);

  return (
    <div
      className="video-container youtube-theme"
      data-shaka-player-container
      ref={videoContainer}
    >
      <video
        className="shaka-video "
        data-shaka-player
        autoPlay
        ref={videoComponent}
        // poster="./assets/poster.jpg"
      />
    </div>
  );
};

export { ShakaPlayer };
