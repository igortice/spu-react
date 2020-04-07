export class MocksAberturaProcesso {
  static destinos = [
    {
      title: 'Destino 1',
      value: '1',
      children: [
        {
          title: 'Destino 3',
          value: '3',
        },
        {
          title: 'Destino 4',
          value: '4',
          children: [
            {
              title: 'Destino 6',
              value: '6',
              children: [
                {
                  title: 'Destino 8',
                  value: '8',
                },
              ],
            },
            {
              title: 'Destino 7',
              value: '7',
            },
          ],
        },
      ],
    },
    {
      title: 'Destino 2',
      value: '2',
    },
    {
      title: 'Destino 5',
      value: '5',
    },
  ];
}
