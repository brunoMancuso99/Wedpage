const control = {};

control.list = (req,res) => {

    req.getConnection((err,conn)=> { // tratamiento de errores

        conn.query('SELECT * FROM  vuelos', (err, vuelos) => {

            if (err) {

                res.json(err);
            }
            res.render('vuelos', {
                data:vuelos
            });
        });

    });

};

control.save = (req, res) => { // ingresar datos
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO vuelos set ?', data, (err, vuelos) => {
        console.log(vuelos)
        res.redirect('/');
      })
    })
  };

control.edit = (req, res) => {  // seleccionar datos
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM vuelos WHERE id = ?", [id], (err, vuelos) => {
        res.render('/', {
          data: vuelos[0]
        })
      });
    });
  };

control.update = (req, res) => { // actualizar datos
    const { id } = req.params;
    const newVuelos = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE vuelos set ? where id = ?', [newVuelos, id], (err, vuelos) => {
      res.redirect('/');
    });
    });
  };

control.delete = (req, res) => { // eliminar
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM vuelos WHERE id = ?', [id], (err, vuelos) => {
        res.redirect('/');
      });
    });
  }

  control.edit = (req, res) => {  // seleccionar datos
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM vuelos WHERE id = ?", [id], (err, vuelos) => {
        res.render('/', {
          data: vuelos[0]
        })
      });
    });
  };

  // otras consultas

  control.select1 = (req,res) => { // listado de pasajeros
    const { id } = req.params;
    connection.query("SELECT * FROM vuelos ORDER BAY idvuelo '0' ASC", (err, vuelos) =>{
      res.render('/', {
          data: vuelos
      });
  });
  
  }

  control.select2 = (req,res) => { // listado de vuelos
    const { id } = req.params;
    connection.query("SELECT * FROM vuelos ORDER BAY idvuelo '0' ASC", (err, vuelos) =>{
      res.render('/', {
          data: vuelos
      });
  });
  
  }

  
  control.select3 = (req,res) => { // apellido de los que van a iguazu
    const { id } = req.params;
    connection.query("SELECT * FROM vuelos WHERE idnrovuelo LIKE '329'", (err, vuelos) =>{
      res.render('/', {
          data: vuelos
      });
  });
  
  }

  control.select4 = (req,res) => { // nombre de los que van a bariloche
    const { id } = req.params;
    connection.query("SELECT * FROM vuelos WHERE idnrovuelo LIKE '330'", (err, vuelos) =>{
      res.render('/', {
          data: vuelos
      });
  });
  
  }

module.exports = control;