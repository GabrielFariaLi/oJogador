import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  allPlayers = [
    {
      id: '579befbbec11f827',
      name: 'Tn',
      country: null,
      has_image: false,
    },
    {
      id: '655d6d7607ff1498',
      name: 'Vrsaljko',
      country: null,
      has_image: false,
    },
    {
      id: '26c67fc4ad07a280',
      name: 'Saul',
      country: null,
      has_image: false,
    },
    {
      id: 'c4e79392d01ff682',
      name: 'Griezmann',
      country: null,
      has_image: false,
    },
    {
      id: 'd3108fc9c712b8fe',
      name: 'Koke',
      country: 'ES',
      has_image: false,
    },
    {
      id: 'fd034dd0690c13a',
      name: 'Furch',
      country: null,
      has_image: false,
    },
    {
      id: 'fb390f894dccdab0',
      name: 'Sanchez',
      country: null,
      has_image: false,
    },
    {
      id: '361371a3824bba91',
      name: 'Lajud',
      country: null,
      has_image: false,
    },
    {
      id: 'fb7694be82c6bc8d',
      name: 'Rodriguez',
      country: null,
      has_image: false,
    },
    {
      id: '7a3966f3106aa6fa',
      name: 'Lopez',
      country: null,
      has_image: false,
    },
    {
      id: '2d91a66fc7745f41',
      name: 'Rabello',
      country: null,
      has_image: false,
    },
    {
      id: 'bfceed17ee0a96b7',
      name: 'Pulido',
      country: null,
      has_image: false,
    },
    {
      id: '6d1b8aba5b105c9b',
      name: 'Mendoza',
      country: null,
      has_image: false,
    },
    {
      id: '100dcf8bb75e98fb',
      name: 'Navarro',
      country: null,
      has_image: false,
    },
    {
      id: '81e8b03b3215a087',
      name: 'Lozano',
      country: null,
      has_image: false,
    },
    {
      id: '1d2a81e6e02e4246',
      name: 'Moralez',
      country: null,
      has_image: false,
    },
    {
      id: 'be118dbf2e7c86b',
      name: 'Jara',
      country: null,
      has_image: false,
    },
    {
      id: '3603f887630c9478',
      name: 'Burdisso',
      country: null,
      has_image: false,
    },
    {
      id: '5da68dd6ff66ad89',
      name: 'Novaretti',
      country: null,
      has_image: false,
    },
    {
      id: 'cd30fa881095a2a8',
      name: 'Murillo',
      country: null,
      has_image: false,
    },
    {
      id: 'db55ce9f66a1b693',
      name: 'William Yarbrough',
      country: 'US',
      has_image: false,
    },
    {
      id: '2a60baedb519a7b7',
      name: 'Fernando Navarro',
      country: 'MX',
      has_image: false,
    },
    {
      id: '4c225cb9c9a65c62',
      name: 'Diego Novaretti',
      country: 'AR',
      has_image: false,
    },
    {
      id: '6bd0f2a2a9412654',
      name: 'Guillermo Burdisso',
      country: 'AR',
      has_image: false,
    },
    {
      id: '8033c3bef7cc9e26',
      name: 'Osvaldo Rodriguez',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'dd9e9a90180109e',
      name: 'Carlos Pena',
      country: 'MX',
      has_image: false,
    },
    {
      id: '266ded18009fb707',
      name: 'Leonel Lopez',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'ab352895bdfbad9d',
      name: 'Christian Valdez',
      country: 'MX',
      has_image: false,
    },
    {
      id: '6db9652d3e22f678',
      name: 'Luis Montes',
      country: 'MX',
      has_image: false,
    },
    {
      id: '98e9fccb6b5dc344',
      name: 'Maxi Moralez',
      country: 'AR',
      has_image: false,
    },
    {
      id: '2b2a3bfddf6fe44d',
      name: 'Mauro Boselli',
      country: 'AR',
      has_image: false,
    },
    {
      id: '1eb2c1c1dc15a6e6',
      name: 'Juan Ignacio Gonzalez',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'd1ade997783903e7',
      name: 'Juan Cornejo',
      country: 'CL',
      has_image: false,
    },
    {
      id: '52eb6778285dbefc',
      name: 'Jose Ruiz',
      country: 'MX',
      has_image: false,
    },
    {
      id: '34d4177c14a47b91',
      name: 'Carlos Alberto Guzman Fonseca',
      country: 'MX',
      has_image: false,
    },
    {
      id: '4b582ba80634da1b',
      name: 'Jorge Luis Calderon',
      country: 'MX',
      has_image: false,
    },
    {
      id: '2c2a12ff9a3c3681',
      name: 'Jose Rodriguez',
      country: 'MX',
      has_image: false,
    },
    {
      id: '84ea7edf179187d7',
      name: 'Oscar Perez',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'd3f513637d3e815e',
      name: 'Stefan Medina',
      country: 'CO',
      has_image: false,
    },
    {
      id: '981509ff0457b26a',
      name: 'Omar Gonzalez',
      country: 'US',
      has_image: false,
    },
    {
      id: '5a17a53aa00d48be',
      name: 'Oscar Murillo',
      country: 'CO',
      has_image: false,
    },
    {
      id: '35c0cf856df61c41',
      name: 'Emmanuel Garcia',
      country: 'MX',
      has_image: false,
    },
    {
      id: '44f1ce527477876',
      name: 'Victor Guzman',
      country: 'MX',
      has_image: false,
    },
    {
      id: '46d6d34e7ce940ed',
      name: 'Jorge Hernandez',
      country: 'MX',
      has_image: false,
    },
    {
      id: '83d1b75c55ed6e70',
      name: 'Ruben Botta',
      country: 'AR',
      has_image: false,
    },
    {
      id: '52f278e4484b2d9a',
      name: 'Jonathan Urretaviscaya',
      country: 'UY',
      has_image: false,
    },
    {
      id: 'be22e7e0c6a51540',
      name: 'Hirving Lozano',
      country: 'MX',
      has_image: false,
    },
    {
      id: '1d8575696dc28937',
      name: 'Franco Jara',
      country: 'AR',
      has_image: false,
    },
    {
      id: '23bb84ddacf7b432',
      name: 'Braian Rodriguez',
      country: 'UY',
      has_image: false,
    },
    {
      id: '870d71951b986092',
      name: 'Roberto Alvarado',
      country: 'MX',
      has_image: false,
    },
    {
      id: '6c7d1f17245e21c1',
      name: 'Erick Gutierrez',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'aa28142ce850c101',
      name: 'Alfonso Blanco',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'cd0c9cca0b4f5bdc',
      name: 'Raul Lopez',
      country: 'MX',
      has_image: false,
    },
    {
      id: '19fa3eb326ef3104',
      name: 'Erick Aguirre',
      country: 'MX',
      has_image: false,
    },
    {
      id: 'e6b2def8e64968d',
      name: 'Sergio Vergara',
      country: 'CL',
      has_image: false,
    },
    {
      id: 'b6f9ce0627dbd2e8',
      name: 'SSV',
      country: null,
      has_image: false,
    },
    {
      id: '51169bcf7dfb8650',
      name: 'Fornaroli',
      country: null,
      has_image: false,
    },
    {
      id: '6b777d2a9d4f289a',
      name: 'McGowan',
      country: null,
      has_image: false,
    },
    {
      id: '294bce9fb198abc7',
      name: 'Brattan',
      country: null,
      has_image: false,
    },
    {
      id: 'a8edbb7d52427b02',
      name: 'Malik',
      country: null,
      has_image: false,
    },
    {
      id: 'e24bcb8fe8c332bf',
      name: 'Regan',
      country: null,
      has_image: false,
    },
    {
      id: 'dacad51deedf6838',
      name: 'Ochieng',
      country: null,
      has_image: false,
    },
    {
      id: '504c84e79ff88140',
      name: 'Jakobsen',
      country: null,
      has_image: false,
    },
    {
      id: '113af4d59cbe5e6c',
      name: 'Eugene Galekovic',
      country: 'AU',
      has_image: false,
    },
    {
      id: '72dce3863f0e5efe',
      name: 'Michael Marrone',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'f8361a8ddf5af12d',
      name: 'Dylan McGowan',
      country: 'AU',
      has_image: false,
    },
    {
      id: '50537b1d0bf9d3df',
      name: 'Taylor Regan',
      country: 'AU',
      has_image: false,
    },
    {
      id: '75732bb92b8bb9ec',
      name: 'Ben Garuccio',
      country: 'AU',
      has_image: false,
    },
    {
      id: '51b327fcfa576ac9',
      name: 'James Holland',
      country: 'AU',
      has_image: false,
    },
    {
      id: '3d433d7806b8a88f',
      name: 'Isaias',
      country: 'ES',
      has_image: false,
    },
    {
      id: '75ffba6c9c953dd4',
      name: "Jordan O'Doherty",
      country: 'AU',
      has_image: false,
    },
    {
      id: '56f7ea5b9d248909',
      name: 'Ryan Kitto',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'd770d3314e665af0',
      name: 'Sergio Cirio',
      country: 'ES',
      has_image: false,
    },
    {
      id: '126b2312b466b3db',
      name: 'Henrique',
      country: 'BR',
      has_image: false,
    },
    {
      id: '989ab4586791e267',
      name: 'Jesse Makarounas',
      country: 'AU',
      has_image: false,
    },
    {
      id: '3a1c1d8e3bbd2e2c',
      name: 'Sergi Guardiola',
      country: 'ES',
      has_image: false,
    },
    {
      id: '5d3b0c55f97b4f4a',
      name: 'John Hall',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'c3472b853b56d517',
      name: 'Mark Ochieng',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'fdf1c6f7d8ec79db',
      name: 'Marcelo Carrusca',
      country: 'AR',
      has_image: false,
    },
    {
      id: '71b9ba9132d80cc2',
      name: 'Dean Bouzanis',
      country: 'AU',
      has_image: false,
    },
    {
      id: '5998b10efb433f6f',
      name: 'Ivan Franjic',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'f912b489d27911',
      name: 'Ruon Tongyik',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'f5a38fb72550f088',
      name: 'Michael Jakobsen',
      country: 'DK',
      has_image: false,
    },
    {
      id: 'f2ac4eadb0d8a6ab',
      name: 'Joshua Rose',
      country: 'NZ',
      has_image: false,
    },
    {
      id: '59aac8fd4ef8ffbb',
      name: 'Luke Brattan',
      country: 'AU',
      has_image: false,
    },
    {
      id: '5a55a59bc5bf6cdd',
      name: 'Osama Malik',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'f8c045deef6a4ffd',
      name: 'Tim Cahill',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'df43b9e9c68f9668',
      name: 'Bruce Kamau',
      country: 'AU',
      has_image: false,
    },
    {
      id: '2e482738f57b31a',
      name: 'Bruno Fornaroli',
      country: 'UY',
      has_image: false,
    },
    {
      id: '6cb7dbe26a2d56b',
      name: 'Nicolas Colazo',
      country: 'AR',
      has_image: false,
    },
    {
      id: 'f7d645fcefb112d9',
      name: 'Fernando Brandan',
      country: 'AR',
      has_image: false,
    },
    {
      id: 'c9afd695d519ab5f',
      name: 'Manny Muscat',
      country: 'MT',
      has_image: false,
    },
    {
      id: 'd887512f8ac6df46',
      name: 'Paulo Retre',
      country: 'AU',
      has_image: false,
    },
    {
      id: 'f259553d1f75c489',
      name: 'Anthony Caceres',
      country: 'AU',
      has_image: false,
    },
    {
      id: '2a694e0d58abce1e',
      name: 'Thomas Sorensen',
      country: 'DK',
      has_image: false,
    },
    {
      id: '7e2849762622038e',
      name: 'Cifuentes',
      country: 'ES',
      has_image: false,
    },
    {
      id: 'ebd514c428adb31e',
      name: 'Carpio',
      country: 'ES',
      has_image: false,
    },
    {
      id: '8c2291417f2e26a9',
      name: 'Aridane',
      country: 'ES',
      has_image: false,
    },
    {
      id: '23ce693125e9b0a3',
      name: 'Khalifa Sankare',
      country: 'SN',
      has_image: false,
    },
    {
      id: '4b5b3cc6fb94ab6d',
      name: 'Brian Olivan',
      country: 'ES',
      has_image: false,
    },
  ];

  viewPlayerResult = {
    id: '6cb7dbe26a2d56b',
    name: 'Nicolas Colazo',
    country: 'AR',
    birth_date: '1990-07-08',
    foot: 'Left',
    height: '175 cm',
    has_image: false,
    last_team: {
      id: '8e1cf3f89b2faab0',
      name: 'Rosario Central',
    },
    transfers: [
      {
        team: {
          id: '8e1cf3f89b2faab0',
          name: 'Rosario Central',
        },
        from: '2019-07-01 00:00:00',
        to: '2020-06-30 00:00:00',
      },
      {
        team: {
          id: '115bd673265d6a8a',
          name: 'CA Tigre',
        },
        from: '2019-01-24 00:00:00',
        to: '2019-06-30 00:00:00',
      },
      {
        team: {
          id: '804762915f3d5638',
          name: 'Aris Salonika',
        },
        from: '2018-07-16 00:00:00',
        to: '2019-01-23 00:00:00',
      },
      {
        team: {
          id: 'b1112e6c3b1601e6',
          name: 'Gimnasia LP',
        },
        from: '2018-06-30 22:00:00',
        to: null,
      },
      {
        team: {
          id: 'b1112e6c3b1601e6',
          name: 'Gimnasia LP',
        },
        from: '2017-07-19 00:00:00',
        to: '2018-06-30 00:00:00',
      },
      {
        team: {
          id: '587f859e975b4648',
          name: 'Melbourne City',
        },
        from: '2016-09-07 00:00:00',
        to: '2017-06-30 00:00:00',
      },
      {
        team: {
          id: '6a919c44cec33ca1',
          name: 'All Boys',
        },
        from: '2013-07-01 00:00:00',
        to: '2016-12-31 00:00:00',
      },
      {
        team: {
          id: 'f78e1565c8be49b5',
          name: 'Boca Juniors',
        },
        from: '2009-07-01 00:00:00',
        to: '2019-06-30 00:00:00',
      },
    ],
  };

  constructor() {}

  getStaticViewPlayerResult() {
    return this.viewPlayerResult;
  }
  getStaticAllPlayer() {
    return this.allPlayers;
  }
}
