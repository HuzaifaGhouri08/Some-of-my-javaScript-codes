function fn() {
        let employees = [
          'Bilal',
          'Zahra',
          'Ali',
          'Sufyan',
          'Waqas',
          'Salman',
          'Ayesha',
        ];
        let random = employees[(Math.random() * employees.length) | 0];
        document.write(random);
      }
      fn();