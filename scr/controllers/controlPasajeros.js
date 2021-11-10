const controlp = {};

controlp.list = (req,res) => {

    req.getConnection((err,conn)=> { // tratamiento de errores

        conn.query('SELECT * FROM  pasajeros', (err, pasajeros) => {

            if (err) {

                res.json(err);
            }
            res.render('pasajeros', {
                data:pasajeros
            });
        });

    });

};

controlp.save = (req, res) => { // ingresar datos
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO pasajeros set ?', data, (err, pasajeros) => {
        console.log(pasajeros)
        res.redirect('/');
      })
    })
  };

  controlp.edit = (req, res) => {  // seleccionar datos
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM pasajeros WHERE id = ?", [id], (err, pasajeros) => {
        res.render('pasajeros_edit', {
          data: pasajeros[0]
        })
      });
    });
  };

  controlp.update = (req, res) => { // actualizar datos
    const { id } = req.params;
    const newPasajeros = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE pasajeros set ? where id = ?', [newPasajeros, id], (err, pasajeros) => {
      res.redirect('/');
    });
    });
  };

  controlp.delete = (req, res) => { // eliminar
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM pasajeros WHERE id = ?', [id], (err, pasajeros) => {
        res.redirect('/');
      });
    });
  }

  ////// otras consultas

  controlp.select = (req,res) => {
    const { id } = req.params;
    connection.query("SELECT * FROM pasajeros WHERE DNI LIKE '45879003'", (err, pasajeros) =>{
      res.render('/', {
          data: pasajeros
      });
  });

}



module.exports = controlp;