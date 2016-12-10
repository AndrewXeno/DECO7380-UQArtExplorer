var services = angular.module('starter.services', [])

services.factory('Collections', function() {
  // Might use a resource here that returns a JSON array
  var collections = [{
    id: 'UQAM00000001',
    title: 'Self portrait',
    creationYear: 'c.1929',
    size: '36.8 * 24.2 cm',
    accession: '2006.13',
    description: 'Collection of The University of Queensland. Gift of the Queensland Art Gallery, 2006.',
    artist: 'WILKIE, Leslie',
    artistDesc: 'Born 1879 Melbourne, Victoria. Died 1935 Adelaide, South Australia.',
    area: 'artefact',
    image: 'img/artworkPic/00000001.jpg'
  }, {
    id: 'UQAM00000002',
    title: 'Happy ending',
    creationYear: '2006',
    size: '90 x 70 x 20 cm',
    accession: '2010.34',
    description: 'Collection of The University of Queensland, purchased 2010.',
    artist: 'NELL',
    artistDesc: 'Born 1975 Maitland, New South Wales. Lives and works Sydney, New South Wales.',
    area: 'sculpture',
    image: 'img/artworkPic/00000002.jpg'
  }, {
    id: 'UQAM00000003',
    title: 'Flowers',
    creationYear: '1946',
    size: '54.5 x 44.2 cm',
    accession: 'Behan 03',
    description: 'The Stuartholme-Behan Collection of Australian Art, The University of Queensland.',
    artist: 'BELL, George',
    artistDesc: 'Born 1878 Kew, Victoria. Lived and worked Melbourne, Victoria; Paris 1904--1906; Europe 1918--1919 and 1934--1935. Died 1966 Toorak, Victoria.',
    area: 'painting',
    image: 'img/artworkPic/00000003.jpg'
  }, {
    id: 'UQAM00000004',
    title: 'The Quarries, Middle Harbour',
    creationYear: '1922',
    size: '68.5 x 78.5 cm',
    accession: 'Behan 05',
    description: 'The Stuartholme-Behan Collection of Australian Art, The University of Queensland.',
    artist: 'BOYD, Penleigh',
    artistDesc: 'Born 1890 Wiltshire, England. Arrived Australia 1894. Lived and worked Melbourne, Victoria; travelled to London and Paris between1911--1918. Died 1923 Warragul, Victoria.',
    area: 'painting',
    image: 'img/artworkPic/00000004.jpg'
  }, {
    id: 'UQAM00000005',
    title: 'Grey pottery vessel, early Han Dynasty',
    creationYear: '206 BCE--220 CE',
    size: '23 x 27 cm',
    accession: '1995.07',
    description: 'Collection of The University of Queensland. Gift of Dr Nat Yuen through the Australian Government\'s Cultural Gifts Program, 1995.',
    artist: 'UNKNOWN',
    artistDesc: 'UNKNOWN',
    area: 'painted terracotta',
    image: 'img/artworkPic/00000005.jpg'
  }, {
    id: 'UQAM00000006',
    title: 'Brown granary jar, Han Dynasty',
    creationYear: '206 BCE--220 CE',
    size: '27 x 13 cm',
    accession: '1995.11.01',
    description: 'Collection of The University of Queensland. Gift of Dr Nat Yuen through the Australian Government\'s Cultural Gifts Program, 1995.',
    artist: 'UNKNOWN',
    artistDesc: 'UNKNOWN',
    area: 'glazed pottery',
    image: 'img/artworkPic/00000006.jpg'
  }, {
    id: 'UQAM00000007',
    title: 'Mythical beast (Qilin), Han Dynasty',
    creationYear: '206 BCE--220 CE',
    size: '12.5 x 25 cm',
    accession: '1995.18',
    description: 'Collection of The University of Queensland. Gift of Dr Nat Yuen through the Australian Government\'s Cultural Gifts Program, 1995.',
    artist: 'UNKNOWN',
    artistDesc: 'UNKNOWN',
    area: 'unglazed pottery',
    image: 'img/artworkPic/00000007.jpg'
  }, {
    id: 'UQAM00000008',
    title: 'Leaning figure',
    creationYear: '1983',
    size: '76.9 x 55.5 cm',
    accession: ' 2014.76',
    description: 'Collection of The University of Queensland. Gift of Michael Rayner AM through the Australian Government\'s Cultural Gifts Program, 2014.',
    artist: 'BALL, Sydney',
    artistDesc: 'Born 1933 Adelaide, South Australia.',
    area: 'ink and oil on paper',
    image: 'img/artworkPic/00000008.jpg'
  }, {
    id: 'UQAM00000009',
    title: 'Island and Bridge #1 with Tree',
    creationYear: '1975',
    size: '122 x 122 cm',
    accession: '2013.203',
    description: 'The Denise Green / Francis X. Claps Collection gifted through The University of Queensland in America, Inc. Foundation. The University of Queensland, 2013.',
    artist: 'GREEN, Denise',
    artistDesc: 'Born 1946 Melbourne, Victoria. Lives and works New York, United States of America.',
    area: 'Painting',
    image: 'img/artworkPic/00000009.jpg'
  }


  ];

  return {
    all: function() {
      return collections;
    },
    remove: function(collection) {
      collections.splice(collections.indexOf(collection), 1);
    },
    get: function(collectionId) {
      for (var i = 0; i < collections.length; i++) {
        if (collections[i].id === collectionId) {
          return collections[i];
        }
      }
      return null;
    }
  };
});


services.factory('Exhibitions', function() {
  var exhibitions = [{
    id: 'UQAMEX00000001',
    name: 'We who love: The Nolan slates',
    duration: '21 April – 24 July 2016',
    introduction: 'We who love: The Nolan slates is a window into the world of renowned Australian painter Sidney Nolan (1917–1992), reflecting a time of artistic experimentation and personal upheaval. From December 1941 to June 1942, Nolan made around 32 paintings on roofing slates. They reveal his distinctive preference for non-art materials, his avant-garde aspirations and his literary interests. Through the paintings, Nolan recorded the end of his marriage, new relationships with patrons John and Sunday Reed, and fears arising from the war in the Pacific. Concerned that there might not be \'many more tomorrows\', Nolan painted the slates as a remarkable, even desperate, avowal of emotional and creative freedom.',
    curator: 'Dr Chris McAuliffe',
    image: 'img/UQAM_photo2.jpg'
  }, {
    id: 'UQAMEX00000002',
    name: 'ephemeral traces: Brisbane\'s artist-run scene in the 1980s',
    duration: '2 April 2016 – 26 June 2016',
    introduction: 'ephemeral traces provides the first comprehensive analysis of artist-run practice in Brisbane during the final decade of the conservative Joh Bjelke-Petersen government. The exhibition focuses on the scene that developed around five key spaces that operated in Brisbane from 1982 to 1988: One Flat, A Room, That Space, The Observatory, and John Mills National. Drawing on artworks, documentation and ephemera, the exhibition provides a contextual account of this progressive artist-run activity, examining collective projects, publications and the spaces themselves, as well as organisations such as the Artworkers Union and Queensland Artworkers Alliance. A counterpoint to Michele Helmrich\'s earlier exhibition Return to sender (UQ Art Museum, 2012), which focused on the artists who left Queensland during the Bjelke-Petersen era, this exhibition is about the artists who stayed.',
    curator: 'Peter Anderson',
    image: 'img/UQAM_photo3.jpg'
  }];

  return {
    all: function() {
      return exhibitions;
    },
    remove: function(exhibition) {
      exhibitions.splice(exhibitions.indexOf(exhibition), 1);
    },
    get: function(exhibitionId) {
      for (var i = 0; i < exhibitions.length; i++) {
        if (exhibitions[i].id === exhibitionId) {
          return exhibitions[i];
        }
      }
      return null;
    }
  };
});
