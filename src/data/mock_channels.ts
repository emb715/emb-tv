type ChannelImage = {
  url: string
  sourceWidth: number
  sourceHeight: number
}

type Connection = {
  url: string
  type: string
  license: string
}

type Channel = {
  id: string
  name: string
  description: string
  title: string
  channelNumber: number
  epgChannelId: string
  categories: string[]
  image: ChannelImage
  connections: Connection[]
}

const channels: Channel[] = [
  {
    id: '1001',
    name: 'America TV',
    description: 'America TV',
    title: 'America TV',
    channelNumber: 2,
    epgChannelId: 'lch3339',
    categories: ['news', 'sports'],
    image: {
      url: './assets/7101319_25A34BE6DD68A865.png',
      sourceWidth: 639,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxMy1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzNlZHMvQW1lcmljYVRWL1NBX0xpdmVfZGFzaF9lbmNfMkEvQW1lcmljYVRWLm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'OGVhMjM1Y2UwODI2NDA4YjIyMWM0OTgxMTVhOWI2MmQ6N2FhOTI2NmVkOTFlYTQ1MTA0ODMzNzAwMjlkZmNmNDU=',
      },
    ],
  },
  {
    id: '2001',
    name: 'CINECANAL',
    description: 'CINECANAL',
    title: 'CINECANAL',
    channelNumber: 301,
    epgChannelId: 'lch3269',
    categories: ['movies'],
    image: {
      url: './assets/6381761_1B6CA9B0AAD15C8F.png',
      sourceWidth: 923,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly8xMDQxLXZvcy5kdHZvdHQuY29tL0RBU0gvbWFuaWZlc3QubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'NWRmMTRjNjFhZjk1MzEyMjk3YTA0YjEwNjg0MDAzMjM6NmI1ZWFkNTM2YTk5MDQ0OTcxOGRhY2U2Zjc4MGI3ZWY=',
      },
    ],
  },
  {
    id: '2002',
    name: 'Warner',
    description: 'WARNER CHANNEL',
    title: 'WARNER CHANNEL',
    channelNumber: 350,
    epgChannelId: 'lch3173',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6402025_7930297E846EF33B.png',
      sourceWidth: 599,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvV2FybmVySEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9XYXJuZXJIRC5tcGQ=',
        type: 'Y2xlYXJrZXk=',
        license:
          'MDY5YmQzZjBiNmMyNzk0NjdlMDg1NDlmMTdiZjViZDA6NWFmYTdlMzY5YTZkZTEwOTM4MThhODVhZjkxMmE3NzU=',
      },
    ],
  },
  {
    id: '2003',
    name: 'Start Channel',
    description: 'STAR CHANNEL HD',
    title: 'STAR CHANNEL HD',
    channelNumber: 302,
    epgChannelId: 'lch3268',
    categories: ['movies', 'series'],
    image: {
      url: './assets/8355162_9D5F70421EBFB84B.png',
      sourceWidth: 788,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzNlZHMvRk9YSEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9GT1hIRC5tcGQ=',
        type: 'Y2xlYXJrZXk=',
        license:
          'ODAyM2U4NWVmOWQxNzU2MWVlMWI0MjQxNzliMWIxNWU6NDc3YWQxODlmMWZjZDJiYWVjMDI2MDY4MTA3Zjg2MmY=',
      },
      {
        url: 'Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jM2Vkcy9GT1hIRC9TQV9MaXZlX2Rhc2hfZW5jXzJBL0ZPWEhELm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'ODAyM2U4NWVmOWQxNzU2MWVlMWI0MjQxNzliMWIxNWU6NDc3YWQxODlmMWZjZDJiYWVjMDI2MDY4MTA3Zjg2MmY=',
      },
    ],
  },
  {
    id: '2004',
    name: 'SONY',
    description: 'SONY',
    title: 'SONY',
    channelNumber: 352,
    epgChannelId: 'lch3178',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6402029_63C699E0EA1EFEB6.png',
      sourceWidth: 491,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvU29ueUhEL1NBX0xpdmVfZGFzaF9lbmNfMkEvU29ueUhELm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZmQ5NjE5ZjlkN2MyZDUxMTVhMzM5OTQxMjc5ZTBiNGI6YmY1NTYzNWU2NTkxZjkwNTY1OWZhMjdhYjNjYTI4MTI=',
      },
      {
        url: 'Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9Tb255SEQvU0FfTGl2ZV9kYXNoX2VuY18yQS9Tb255SEQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZmQ5NjE5ZjlkN2MyZDUxMTVhMzM5OTQxMjc5ZTBiNGI6YmY1NTYzNWU2NTkxZjkwNTY1OWZhMjdhYjNjYTI4MTI=',
      },
    ],
  },
  {
    id: '2005',
    name: 'CINEMAX',
    description: 'CINEMAX',
    title: 'CINEMAX',
    channelNumber: 300,
    epgChannelId: 'lch3123',
    categories: ['movies'],
    image: {
      url: './assets/6400603_DE0CBB7B732B556A.png',
      sourceWidth: 1077,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvQ2luZW1heC9TQV9MaXZlX2Rhc2hfZW5jXzJBL0NpbmVtYXgubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'OTc3OTI4YTkyYjgyYmEzNzgxNzQxYTY0NzBmOGY0NWI6NTFmNGU2MjgyN2MxMjhmNzIxMGI3OWExMTU4NzY2MWE=',
      },
      {
        url: 'Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9DaW5lbWF4L1NBX0xpdmVfZGFzaF9lbmNfMkEvQ2luZW1heC5tcGQ=',
        type: 'Y2xlYXJrZXk=',
        license:
          'OTc3OTI4YTkyYjgyYmEzNzgxNzQxYTY0NzBmOGY0NWI6NTFmNGU2MjgyN2MxMjhmNzIxMGI3OWExMTU4NzY2MWE=',
      },
    ],
  },
  {
    id: '2006',
    name: 'PARAMOUNT CHANNEL',
    description: 'PARAMOUNT CHANNEL',
    title: 'PARAMOUNT CHANNEL',
    channelNumber: 303,
    epgChannelId: 'lch3307',
    categories: ['movies'],
    image: {
      url: './assets/6840720_AEB0D89DD5B9FA4C.png',
      sourceWidth: 588,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly9lZGdlLWxpdmUxNi1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvUGFyYW1vdW50L1NBX0xpdmVfZGFzaF9lbmMvUGFyYW1vdW50Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'Yjg1YjcxMGVjZmYzZTM4ZjMxZmM4ZTI0OWIxYzFjZWY6YTE1NDRjMTkzZGRlNmY4ODU4YzkzNThlZTY5YTYwYTc=',
      },
      {
        url: 'Ly9lZGdlLWxpdmUxNi1oci5jdmF0dHYuY29tLmFyL2xpdmUvYzdlZHMvUGFyYW1vdW50L1NBX0xpdmVfZGFzaF9lbmMvUGFyYW1vdW50Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'Yjg1YjcxMGVjZmYzZTM4ZjMxZmM4ZTI0OWIxYzFjZWY6YTE1NDRjMTkzZGRlNmY4ODU4YzkzNThlZTY5YTYwYTc=',
      },
      {
        url: 'Ly9lZGdlLXZvZDAzLWhyLmN2YXR0di5jb20uYXIvbGl2ZS9jN2Vkcy9QYXJhbW91bnQvU0FfTGl2ZV9kYXNoX2VuYy9QYXJhbW91bnQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'Yjg1YjcxMGVjZmYzZTM4ZjMxZmM4ZTI0OWIxYzFjZWY6YTE1NDRjMTkzZGRlNmY4ODU4YzkzNThlZTY5YTYwYTc=',
      },
    ],
  },
  {
    id: '2007',
    name: 'HBO',
    description: 'HBO',
    title: 'HBO',
    channelNumber: 407,
    epgChannelId: 'lch3119',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6404165_72D0392FCC660718.png',
      sourceWidth: 687,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLUhEL2RlZmF1bHQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZGYxOGY2YTA1YmFiMjhkODllNWRjMDFkODhmNGRlYjg6YmFjZWI1MjU0NjdjMGRiMjJiYTgzMDkwNjE2YzFhZDA=',
      },
      //   {
      //     url: 'Ly9kdHZvdHQtYWJjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExNDAvbWFuaWZlc3QubXBk',
      //     type: 'Y2xlYXJrZXk=',
      //     license:
      //       'OTllZWZjMDY4ZGIzNTA5YjlmMGNmNWIzNDExNDIxOWQ6NmMyM2UzMWE0ZDgzYjU2OGU4NGFlYzYwOWE2M2ViYzk=',
      //   },
    ],
  },
  {
    id: '2008',
    name: 'HBO 2',
    description: 'HBO 2',
    title: 'HBO 2',
    channelNumber: 408,
    epgChannelId: 'lch3117',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6404166_44AAB142C8AA2E73.png',
      sourceWidth: 771,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvSEJPXzIvU0FfTGl2ZV9kYXNoX2VuYy9IQk9fMi5tcGQ=',
        type: 'Y2xlYXJrZXk=',
        license:
          'YzkwY2M1N2FkMmM0MzZlNWE3N2RiMmY4ZDlkYjJkODU6MDRmNmM3Mzk4NGJkY2ZmZDAxMzA1MDYwODQ5NzkzNWQ=',
      },
      //   {
      //     url: 'aHR0cHM6Ly9kdHZvdHQtYWJjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExMzcvbWFuaWZlc3QubXBk',
      //     type: 'Y2xlYXJrZXk=',
      //     license:
      //       'MmEyYWVkMTdkYzYwNTBmYjlkZWU2ZTY1YTA2YjM5MjU6YmFjNTgxOGE2ZTExMzVkYjNjOWYyNGZiNzUyZjY5OWY=',
      //   },
    ],
  },
  {
    id: '2009',
    name: 'HBO PLUS',
    description: 'HBO PLUS',
    title: 'HBO PLUS',
    channelNumber: 410,
    epgChannelId: 'lch3121',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6404168_D505AFC331359E2E.png',
      sourceWidth: 800,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvSEJPX1BsdXMvU0FfTGl2ZV9kYXNoX2VuYy9IQk9fUGx1cy5tcGQ=',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZjBlN2Y3ZDQ1ODk5MGVkZmFiN2I5OGI0MTI1NjQ2MTU6NzkyMDU3NTRiN2Y4NGE2MjY2MWMyZGJlOWRlNWRkNWQ=',
      },
      //   {
      //     url: 'aHR0cHM6Ly9kdHZvdHQtYWJjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExNDEvbWFuaWZlc3QubXBk',
      //     type: 'Y2xlYXJrZXk=',
      //     license:
      //       'Njc5NWEzMDNhOWU4NTE3ZmJjYTM4Mzc2YzBhZjJmNzY6MWJkYjMxNzIyOTA2NmFkMmQ3NGM0ODE0YTEzOGUxMzY=',
      //   },
    ],
  },
  {
    id: '2010',
    name: 'HBO FAMILY',
    description: 'HBO FAMILY',
    title: 'HBO FAMILY',
    channelNumber: 409,
    epgChannelId: 'lch3118',
    categories: ['movies', 'series'],
    image: {
      url: './assets/8553111_DD5F4931A18250EE.png',
      sourceWidth: 603,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvSEJPX0ZhbWlseS9TQV9MaXZlX2Rhc2hfZW5jL0hCT19GYW1pbHkubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'NTM1NDczMTMyZjY4MDgyMTYwYjQ4OTQ4MmNhMzVmOGU6ZTkwZmQ5MWZjZDNmYzgwOWJlZDJiMWMwZDM3ZjcyOTc=',
      },
    ],
  },
  {
    id: '2011',
    name: 'HBO SIGNATURE',
    description: 'HBO SIGNATURE',
    title: 'HBO SIGNATURE',
    channelNumber: 411,
    epgChannelId: 'lch3127',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6404169_BB5D60FF3E9FC774.png',
      sourceWidth: 674,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9lZGdlLWxpdmUxNi1zbC5jdmF0dHYuY29tLmFyL2xpdmUvYzZlZHMvSEJPX1NpZ25hdHVyZS9TQV9MaXZlX2Rhc2hfZW5jL0hCT19TaWduYXR1cmUubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZTg2NjQ5OWZiYzExNDlmNDk5ODk2NzIwNzVhYTNhNjg6ZDJkZDVjOTU2MjNjNjM0MzI0MDk4MWMyMjAyZmMzMTE=',
      },
    ],
  },
  {
    id: '2012',
    name: 'HBO MUNDI',
    description: 'HBO MUNDI',
    title: 'HBO MUNDI',
    channelNumber: 412,
    epgChannelId: 'lch3128',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6576346_20E15FC6E23A0B4D.png',
      sourceWidth: 600,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLU1VTkRJLUhEL2RlZmF1bHQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'YmE0MDUyY2E1ZWI2ZjhmZjZiOThkNDdkMDk4YjJkZWM6YmIzZTRiZmExODIxZDJiZGMyNWM5YTA5NzBlNGUzYjg=',
      },
    ],
  },
  {
    id: '2013',
    name: 'HBO XTREME',
    description: 'HBO XTREME',
    title: 'HBO XTREME',
    channelNumber: 413,
    epgChannelId: 'lch3120',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6576353_680306081B40EE38.png',
      sourceWidth: 603,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLVhUUkVNRS1IRC9kZWZhdWx0Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'YmM4ZDQzNjlmY2ZmODZkYjc2NWRiODIzNTZiNDc5N2M6OGE3ZTgwMWRiYzI3NWUzZjRlMWY0M2NiYTY0ODkwNmE=',
      },
    ],
  },
  {
    id: '2014',
    name: 'HBO POP',
    description: 'HBO POP',
    title: 'HBO POP',
    channelNumber: 414,
    epgChannelId: 'lch3129',
    categories: ['movies', 'series'],
    image: {
      url: './assets/6576553_D50CDAAE95539E82.png',
      sourceWidth: 567,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLVBPUC1IRC9kZWZhdWx0Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'YmNmMzZmNDEyZmEzZDczNWNlYTA0Zjc0NDNmYmY3N2M6NmZmMjlmYjJkNmI3ZDgyNWViMDYwMDQ2NTBhMGE0ZWE=',
      },
    ],
  },
  {
    id: '2015',
    name: 'STUDIO UNIVERSAL',
    description: 'STUDIO UNIVERSAL',
    title: 'STUDIO UNIVERSAL',
    channelNumber: 316,
    epgChannelId: 'lch3984',
    categories: ['series', 'movies'],
    image: {
      url: './assets/6400877_2A9597A863DAD7FE.png',
      sourceWidth: 1077,
      sourceHeight: 585,
    },
    connections: [
      {
        //// Ly8xMjEwLXZvcy5kdHZvdHQuY29tL0RBU0gvbWFuaWZlc3QubXBk&key=MjY2OTUwOTg4NGNlMzYxYzk2NDZiNTZjYTVkNTFlN2Y=&key2=MjkyYmI3MGJhYzc3NTc1NDZhNjllNDNmNzc4YzNjZGM=
        // 2669509884ce361c9646b56ca5d51e7f:292bb70bac7757546a69e43f778c3cdc
        url: 'aHR0cHM6Ly9jZG4uY3ZhdHR2LmNvbS5hci9saXZlL2M2ZWRzL1N0dWRpb19Vbml2ZXJzYWwvU0FfTGl2ZV9kYXNoX2VuYy9TdHVkaW9fVW5pdmVyc2FsLm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'ZDliNTQxZTNjZDA2NGQ1Njk4NDNkYTQyNzg4ZDQyNjM6YmJhNWQyNmFkNTA1MWZiM2YyY2Y3ZTNkZDhhNGE3ZDg',
      },
    ],
  },
  {
    id: '2016',
    name: 'UNIVERSAL Cinema',
    description: 'UNIVERSAL Cinema',
    title: 'UNIVERSAL Cinema',
    channelNumber: 0,
    epgChannelId: '',
    categories: ['movies'],
    image: {
      url: './assets/3dd657ae175a7ab584ef40c1a517e63f.png',
      sourceWidth: 1600,
      sourceHeight: 872,
    },
    connections: [
      {
        url: 'Ly9saXZlMi1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvVU5JVkVSU0FMLUNJTkVNQS1IRC9kZWZhdWx0Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'OWNjZDVkZDBjODZhNDBlZDcxOWI4M2UxODAxYmNkODg6NmQ1ZTYyNTI1ODM3YmE5YjdlMDljZmI4NzE2MTE2YmE=',
      },
    ],
  },
  {
    id: '2017',
    name: 'UNIVERSAL Premier',
    description: 'UNIVERSAL Premier',
    title: 'UNIVERSAL Premier',
    channelNumber: 0,
    epgChannelId: '',
    categories: ['movies'],
    image: {
      url: './assets/WI4M2UxODAxYmNkODg6N.png',
      sourceWidth: 1200,
      sourceHeight: 660,
    },
    connections: [
      {
        url: 'Ly9saXZlMi1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvVU5JVkVSU0FMLVBSRU1JRVJFLUhEL2RlZmF1bHQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'OWNjZDVkZDBjODZhNDBlZDcxOWI4M2UxODAxYmNkODg6NmQ1ZTYyNTI1ODM3YmE5YjdlMDljZmI4NzE2MTE2YmE=',
      },
    ],
  },
  {
    id: '2018',
    name: 'UNIVERSAL Comedy',
    description: 'UNIVERSAL Comedy',
    title: 'UNIVERSAL Comedy',
    channelNumber: 0,
    epgChannelId: '',
    categories: ['series', 'movies'],
    image: {
      url: './assets/94d588e2c343e4a92a6cc6701d60811e.png',
      sourceWidth: 1600,
      sourceHeight: 872,
    },
    connections: [
      {
        url: 'Ly9saXZlMi1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvVU5JVkVSU0FMLUNPTUVEWS1IRC9kZWZhdWx0Lm1wZA==',
        type: 'Y2xlYXJrZXk=',
        license:
          'OTJiMTYyYjBiMWQwZGJiMWU0MDFmNTg0NWI0Y2UxMDk6ODNiN2FlMjc2Nzg0YTdmNzhmNGEwYzExOTA5NzRkNWM=',
      },
    ],
  },
  {
    id: '3001',
    name: 'TYC SPORTS',
    description: 'TYC SPORTS',
    title: 'TYC SPORTS',
    channelNumber: 207,
    epgChannelId: 'lch3356',
    categories: ['sports'],
    image: {
      url: './assets/6400462_2AFBF9F7540F0649.png',
      sourceWidth: 1017,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly8xMjQwLXZvcy5kdHZvdHQuY29tL0RBU0gvbWFuaWZlc3QubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'NGQ0NWI3OWQ0NDg3MzQzNTg5MDU4YWI0OWRkZjhjZjA6YWE3Zjk1ZjcxYTNjZmU0MGFhNTk5MDRmOTI4NWFmNzI=',
      },
    ],
  },
  {
    id: '5002',
    name: 'HISTORY 2',
    description: 'HISTORY 2',
    title: 'HISTORY 2',
    channelNumber: 610,
    epgChannelId: 'lch3126',
    categories: ['news'],
    image: {
      url: './assets/10556454_1534264D9C0B8BFC.png',
      sourceWidth: 1200,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly9kdHZvdHQtY2JjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExNDcvbWFuaWZlc3QubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'OThiZjFkNTEwY2I0NTE0NTk0MmU1ZDRjMWQ1ZjIxMWQ6ZDZkNTE4OTQ5Y2Y3MzRjM2UwMzMyOGRkYTViNDU5NjY=',
      },
    ],
  },
  {
    id: '5001',
    name: 'HISTORY CHANNEL',
    description: 'HISTORY CHANNEL',
    title: 'HISTORY CHANNEL',
    channelNumber: 609,
    epgChannelId: 'lch3176',
    categories: ['news'],
    image: {
      url: './assets/10556449_1A6D8A2DB98235CD.png',
      sourceWidth: 1200,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly9kdHZvdHQtY2JjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExNDgvbWFuaWZlc3QubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'MGRjNjRmOWIxOWFiNTFhZTg4OTU5YWZlYzk2ZTc2MzE6ZWYxZDA4OTRhOTM2ZjczOTNlYzdiZmEzOGZmNjE4Y2I=',
      },
    ],
  },
  {
    id: '5099',
    name: 'Smithsonian Channel',
    description: 'Smithsonian Channel',
    title: 'Smithsonian Channel',
    channelNumber: 0,
    epgChannelId: '',
    categories: ['news'],
    image: {
      url: './assets/edbbed313f434f886bc630a3768d8b74.png',
      sourceWidth: 1800,
      sourceHeight: 340,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly9kdHZvdHQtYWJjLmFrYW1haXplZC5uZXQvZGFzaF9saXZlXzExODgvbWFuaWZlc3QubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'OGRhYzk4NmM1OWI3NTM1ZGE0YzNjNzllMGQ1NWVlNDM6MzBiOWYzMGJiN2JhM2IxYTUxZDdlMzlmNDZmMzcxYWQ=',
      },
    ],
  },
  {
    id: '9999',
    name: 'TELEMUNDO-HD',
    description: 'TELEMUNDO-HD',
    title: 'TELEMUNDO HD',
    channelNumber: 365,
    epgChannelId: 'lch3993',
    categories: ['news'],
    image: {
      url: './assets/6404400_715F24BDA274C0D1.png',
      sourceWidth: 603,
      sourceHeight: 585,
    },
    connections: [
      {
        url: 'aHR0cHM6Ly9saXZlMy1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvVEVMRU1VTkRPLUhEL2RlZmF1bHQubXBk',
        type: 'Y2xlYXJrZXk=',
        license:
          'ODcyMzRlZjhhMDMyOGIwMDA5NDFmZDE4YmQ3NWQ3OGU6MmJiYmViODc4MzUwOWE0ZTc3ZTNiNzljZDdiMTg2OWY=',
      },
    ],
  },
]

// SOME HBO
// {
//     id: '2008',
//     name: 'HBO ',
//     description: 'HBO ',
//     title: 'HBO ',
//     channelNumber: 408,
//     epgChannelId: 'lch3117',
//     categories: ['movies', 'series'],
//     image: {
//       url: './assets/6404165_72D0392FCC660718.png',
//       sourceWidth: 771,
//       sourceHeight: 585,
//     },
//     connections: [
//       {
//         url: 'Ly9saXZlNS1vdHQuaXp6aWdvLnR2L291dC91L2Rhc2gvSEJPLUhEL2RlZmF1bHQubXBk',
//         type: 'Y2xlYXJrZXk=',
//         license:
//           'ZGYxOGY2YTA1YmFiMjhkODllNWRjMDFkODhmNGRlYjg6YmFjZWI1MjU0NjdjMGRiMjJiYTgzMDkwNjE2YzFhZDA=',
//       },
//     ],
//   },

export { channels }
export type { Channel }
