const Complemento = require("../models/complemento_model");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const complementos = [
  {
    Colectivo: "Funcionario",
    Nombre: "Dificultad Técnica",
    Descripcion: "",
    Grados: [
      {
        IndiceGrado: "",
        Descripcion: "",
        Puntos: "",
        Salario: {
          Unmes: "",
          Docemeses: "",
          Catorcemeses: ""
        }
      }
    ],
    Subcompl: [
      {
        Nombre: "Especialización",
        Descripcion: "",
        Grados: [
          {
            IndiceGrado: "1",
            Descripcion: "",
            Puntos: 2,
            Salario: {
              Unmes: "60.06",
              Docemeses: "720.68",
              Catorcemeses: "840.79"
            }
          },
          {
            IndiceGrado: "2",
            Descripcion: "",
            Puntos: 4,
            Salario: {
              Unmes: "120.11",
              Docemeses: "1,441.36",
              Catorcemeses: "1,681.59"
            }
          },
          {
            IndiceGrado: "3",
            Descripcion: "",
            Puntos: 6,
            Salario: {
              Unmes: "180.17",
              Docemeses: "2,162.04",
              Catorcemeses: "2,522.38"
            }
          },
          {
            IndiceGrado: "4",
            Descripcion: "",
            Puntos: 8,
            Salario: {
              Unmes: "240.23",
              Docemeses: "2,882.72",
              Catorcemeses: "3,363.17"
            }
          },
          {
            IndiceGrado: "5",
            Descripcion: "",
            Puntos: 10,
            Salario: {
              Unmes: "300.29",
              Docemeses: "3,603.42",
              Catorcemeses: "4,203.99"
            }
          }
        ]
      },
      {
        Nombre: "Experiencia Requerida",
        Descripcion: "",
        Grados: [
          {
            IndiceGrado: "1",
            Descripcion: "",
            Puntos: 2,
            Salario: {
              Unmes: "60.06",
              Docemeses: "720.68",
              Catorcemeses: "840.79"
            }
          },
          {
            IndiceGrado: "2",
            Descripcion: "",
            Puntos: 4,
            Salario: {
              Unmes: "120.11",
              Docemeses: "1,441.36",
              Catorcemeses: "1,681.59"
            }
          },
          {
            IndiceGrado: "3",
            Descripcion: "",
            Puntos: 6,
            Salario: {
              Unmes: "180.17",
              Docemeses: "2,162.04",
              Catorcemeses: "2,522.38"
            }
          },
          {
            IndiceGrado: "4",
            Descripcion: "",
            Puntos: 8,
            Salario: {
              Unmes: "240.23",
              Docemeses: "2,882.72",
              Catorcemeses: "3,363.17"
            }
          },
          {
            IndiceGrado: "5",
            Descripcion: "",
            Puntos: 10,
            Salario: {
              Unmes: "300.29",
              Docemeses: "3,603.42",
              Catorcemeses: "4,203.99"
            }
          }
        ]
      },
      {
        Nombre: "Relaciones",
        Descripcion: "",
        Grados: [
          {
            IndiceGrado: "1",
            Descripcion: "",
            Puntos: 0,
            Salario: {
              Unmes: "0",
              Docemeses: "0",
              Catorcemeses: "0"
            }
          },
          {
            IndiceGrado: "2",
            Descripcion: "",
            Puntos: 2,
            Salario: {
              Unmes: "60.06",
              Docemeses: "720.68",
              Catorcemeses: "840.79"
            }
          },
          {
            IndiceGrado: "3",
            Descripcion: "",
            Puntos: 4,
            Salario: {
              Unmes: "120.11",
              Docemeses: "1,441.36",
              Catorcemeses: "1,681.59"
            }
          },
          {
            IndiceGrado: "4",
            Descripcion: "",
            Puntos: 6,
            Salario: {
              Unmes: "180.17",
              Docemeses: "2,162.04",
              Catorcemeses: "2,522.38"
            }
          },
          {
            IndiceGrado: "5",
            Descripcion: "",
            Puntos: 8,
            Salario: {
              Unmes: "240.23",
              Docemeses: "2,882.72",
              Catorcemeses: "3,363.17"
            }
            },
            {
              IndiceGrado: "6",
              Descripcion: "",
              Puntos: 10,
              Salario: {
                Unmes: "300.29",
                Docemeses: "3,603.42",
                Catorcemeses: "4,203.99"
              }
          }
        ]
      }
    ]
  }
];

Complemento.create(complementos, (err, complementos) => {
  if (err) {
    throw err;
  }
  console.log("Success, complementos created", complementos);
  mongoose.connection.close();
});
