const EPG_API_URL =
import.meta.env.REACT_APP_EPG_API_URL ?? 'https://contentapi-ar.cdn.telefonica.com/29/default/es-AR/'
const EPG_API_FIELDS =
import.meta.env.REACT_APP_EPG_API_FIELDS ??
  'Pid,Title,Description,ChannelName,ChannelNumber,CallLetter,Start,End,LiveChannelPid,LiveProgramPid,EpgSerieId,SeriesPid,SeasonPid,SeasonNumber,images.videoFrame,images.banner,LiveToVod,AgeRatingPid,forbiddenTechnology,IsSoDisabled'

export { EPG_API_URL, EPG_API_FIELDS }
