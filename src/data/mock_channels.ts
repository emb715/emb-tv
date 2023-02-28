
type ChannelImage = {
  url: string;
  sourceWidth: number;
  sourceHeight: number;
}

type Connection = {
  url: string;
  type: string;
  license: string;
}

type Channel = {
  id: string;
  name: string;
  description: string;
  title: string;
  channelNumber: number;
  epgChannelId: string;
  categories: string[];
  image: ChannelImage;
  connections: Connection[];
}

const channels: Channel[] = [
  {
      "id": "1001",
      "name": "America TV",
      "description": "America TV",
      "title": "America TV",
      "channelNumber": 2,
      "epgChannelId": "lch3339",
      "categories": [
          "news",
          "sports"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA3LzEwLzcxMDEzMTlfMjVBMzRCRTZERDY4QTg2NS5wbmc=",
          "sourceWidth": 639,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxMy1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzNlZHMvQW1lcmljYVRWL1NBX0xpdmVfZGFzaF9lbmNfMkEvQW1lcmljYVRWLm1wZA==",
              "type": "Y2xlYXJrZXk=",
              "license": "OGVhMjM1Y2UwODI2NDA4YjIyMWM0OTgxMTVhOWI2MmQ6N2FhOTI2NmVkOTFlYTQ1MTA0ODMzNzAwMjlkZmNmNDU="
          }
      ]
  },
  {
      "id": "2002",
      "name": "Warner",
      "description": "WARNER CHANNEL",
      "title": "WARNER CHANNEL",
      "channelNumber": 350,
      "epgChannelId": "lch3173",
      "categories": [
          "movies",
          "series"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2LzQwLzY0MDIwMjVfNzkzMDI5N0U4NDZFRjMzQi5wbmc=",
          "sourceWidth": 599,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvV2FybmVySEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9XYXJuZXJIRC5tcGQ=",
              "type": "Y2xlYXJrZXk=",
              "license": "MDY5YmQzZjBiNmMyNzk0NjdlMDg1NDlmMTdiZjViZDA6NWFmYTdlMzY5YTZkZTEwOTM4MThhODVhZjkxMmE3NzU="
          }
      ]
  },
  {
      "id": "2003",
      "name": "Start Channel",
      "description": "STAR CHANNEL HD",
      "title": "STAR CHANNEL HD",
      "channelNumber": 302,
      "epgChannelId": "lch3268",
      "categories": [
          "movies",
          "series"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA4LzM1LzgzNTUxNjJfOUQ1RjcwNDIxRUJGQjg0Qi5wbmc=",
          "sourceWidth": 788,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzNlZHMvRk9YSEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9GT1hIRC5tcGQ=",
              "type": "Y2xlYXJrZXk=",
              "license": "ODAyM2U4NWVmOWQxNzU2MWVlMWI0MjQxNzliMWIxNWU6NDc3YWQxODlmMWZjZDJiYWVjMDI2MDY4MTA3Zjg2MmY="
          },
          {
              "url": "Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jM2Vkcy9GT1hIRC9TQV9MaXZlX2Rhc2hfZW5jXzJBL0ZPWEhELm1wZA==",
              "type": "Y2xlYXJrZXk=",
              "license": "ODAyM2U4NWVmOWQxNzU2MWVlMWI0MjQxNzliMWIxNWU6NDc3YWQxODlmMWZjZDJiYWVjMDI2MDY4MTA3Zjg2MmY="
          }
      ]
  },
  {
      "id": "2004",
      "name": "SONY",
      "description": "SONY",
      "title": "SONY",
      "channelNumber": 352,
      "epgChannelId": "lch3178",
      "categories": [
          "movies",
          "series"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2LzQwLzY0MDIwMjlfNjNDNjk5RTBFQTFFRkVCNi5wbmc=",
          "sourceWidth": 491,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvU29ueUhEL1NBX0xpdmVfZGFzaF9lbmNfMkEvU29ueUhELm1wZA==",
              "type": "Y2xlYXJrZXk=",
              "license": "ZmQ5NjE5ZjlkN2MyZDUxMTVhMzM5OTQxMjc5ZTBiNGI6YmY1NTYzNWU2NTkxZjkwNTY1OWZhMjdhYjNjYTI4MTI="
          },
          {
              "url": "Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9Tb255SEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9Tb255SEQubXBk",
              "type": "Y2xlYXJrZXk=",
              "license": "ZmQ5NjE5ZjlkN2MyZDUxMTVhMzM5OTQxMjc5ZTBiNGI6YmY1NTYzNWU2NTkxZjkwNTY1OWZhMjdhYjNjYTI4MTI="
          }
      ]
  },
  {
      "id": "2005",
      "name": "CINEMAX",
      "description": "CINEMAX",
      "title": "CINEMAX",
      "channelNumber": 300,
      "epgChannelId": "lch3123",
      "categories": [
          "movies"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2LzQwLzY0MDA2MDNfREUwQ0JCN0I3MzJCNTU2QS5wbmc=",
          "sourceWidth": 1077,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvQ2luZW1heC9TQV9MaXZlX2Rhc2hfZW5jXzJBL0NpbmVtYXgubXBk",
              "type": "Y2xlYXJrZXk=",
              "license": "OTc3OTI4YTkyYjgyYmEzNzgxNzQxYTY0NzBmOGY0NWI6NTFmNGU2MjgyN2MxMjhmNzIxMGI3OWExMTU4NzY2MWE="
          },
          {
              "url": "Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9DaW5lbWF4L1NBX0xpdmVfZGFzaF9lbmNfMkEvQ2luZW1heC5tcGQ=",
              "type": "Y2xlYXJrZXk=",
              "license": "OTc3OTI4YTkyYjgyYmEzNzgxNzQxYTY0NzBmOGY0NWI6NTFmNGU2MjgyN2MxMjhmNzIxMGI3OWExMTU4NzY2MWE="
          }
      ]
  },
  {
      "id": "2006",
      "name": "PARAMOUNT CHANNEL",
      "description": "PARAMOUNT CHANNEL",
      "title": "PARAMOUNT CHANNEL",
      "channelNumber": 303,
      "epgChannelId": "lch3307",
      "categories": [
          "movies"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2Lzg0LzY4NDA3MjBfQUVCMEQ4OURENUI5RkE0Qy5wbmc=",
          "sourceWidth": 588,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvUGFyYW1vdW50L1NBX0xpdmVfZGFzaF9lbmMvUGFyYW1vdW50Lm1wZA==",
              "type": "Y2xlYXJrZXk=",
              "license": "Yjg1YjcxMGVjZmYzZTM4ZjMxZmM4ZTI0OWIxYzFjZWY6YTE1NDRjMTkzZGRlNmY4ODU4YzkzNThlZTY5YTYwYTc="
          },
          {
              "url": "Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9QYXJhbW91bnQvU0FfTGl2ZV9kYXNoX2VuYy9QYXJhbW91bnQubXBk",
              "type": "Y2xlYXJrZXk=",
              "license": "Yjg1YjcxMGVjZmYzZTM4ZjMxZmM4ZTI0OWIxYzFjZWY6YTE1NDRjMTkzZGRlNmY4ODU4YzkzNThlZTY5YTYwYTc="
          }
      ]
  },
  {
      "id": "2007",
      "name": "HBO",
      "description": "HBO",
      "title": "HBO",
      "channelNumber": 407,
      "epgChannelId": "lch3119",
      "categories": [
          "movies",
          "series"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2LzQwLzY0MDQxNjVfNzJEMDM5MkZDQzY2MDcxOC5wbmc=",
          "sourceWidth": 687,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLUhEL2RlZmF1bHQubXBk",
              "type": "Y2xlYXJrZXk=",
              "license": "ZGYxOGY2YTA1YmFiMjhkODllNWRjMDFkODhmNGRlYjg6YmFjZWI1MjU0NjdjMGRiMjJiYTgzMDkwNjE2YzFhZDA="
          }
      ]
  },
  {
      "id": "999",
      "name": "TELEMUNDO-HD",
      "description": "TELEMUNDO-HD",
      "title": "TELEMUNDO HD",
      "channelNumber": 365,
      "epgChannelId": "lch3993",
      "categories": [
          "news"
      ],
      "image": {
          "url": "aHR0cDovL21lZGlhLmd2cC50ZWxlZm9uaWNhLmNvbS9zdG9yYWdlYXJlYTAvSU1BR0VTLzAwLzA2LzQwLzY0MDQ0MDBfNzE1RjI0QkRBMjc0QzBEMS5wbmc=",
          "sourceWidth": 603,
          "sourceHeight": 585
      },
      "connections": [
          {
              "url": "aHR0cHM6Ly9saXZlMy1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvVEVMRU1VTkRPLUhEL2RlZmF1bHQubXBk",
              "type": "Y2xlYXJrZXk=",
              "license": "ODcyMzRlZjhhMDMyOGIwMDA5NDFmZDE4YmQ3NWQ3OGU6MmJiYmViODc4MzUwOWE0ZTc3ZTNiNzljZDdiMTg2OWY="
          }
      ]
  }
]

export { channels }
export type { Channel}