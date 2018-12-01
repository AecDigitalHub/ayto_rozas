const express = require("express");
const router = express.Router();
// const loggedIn = require("../../utils/isAuthenticated");
const dpt = require("../../models/dpt_model");
const puesto = require("../../models/puesto_model");
const valors = require("../../models/vpt_model");
const vptcompls = require("../../models/vpt_complementos_model");
const vptretribs = require("../../models/vpt_retribucion_model");
const salariobases = require("../../models/salariobase");
const _ = require("lodash");

router.get("/", (req, res, next) => {
  dpt
    .find({})
    .populate("Puestos")
    .populate("Vacantes")
    .then(positions => {
      return res.status(200).json({ positions });
    });
});

router.get("/:id", (req, res, next) => {
  dpt
    .findById(req.params.id)
    .populate("Puestos")
    .populate("Vacantes")
    .then(position => {
      salariobases.findOne({ Nivel: position.ConocExper.FormReglada.Nivel }).then(retribucion =>{
        console.log(retribucion)
      valors.findOneAndUpdate({ CodDPT: position.CodigoDPT }, { SalarioBase: retribucion.SalarioBase }, { new:true})
      .populate("Complementos.ComplDestino")
      .populate({ path: "Complementos.ComplEspecifico", populate: { path: "Subcomplementos" }})
      .then(vpt => {
        // salariobases.findOne({ Nivel: position.FichaDPT.Nivel }).then(retribucion => {
          return res.status(200).json({ position, vpt });
        });
      });
  });
});

router.post("/add/vpt", (req, res, next) => {
  const newValoracion = new valors({
    Position: req.body.Position,
    CodDPT: req.body.CodigoDPT,
    Complementos: {
      ComplDestino: [],
      TotalCD: String,
      ComplEspecifico: [],
      TotalCE: String
    }
  });
  newValoracion.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newValoracion.errors) { return res.status(400).json(newValoracion)}
    return res.status(200).json(newValoracion)
  });
});


router.put("/add/funcion/:id", (req, res, next) => {
  const Funcion = req.body;
  let FunctiontoAdd = Object.values(Funcion).toString();

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.Funciones.push(FunctiontoAdd);
    dpt
      .findByIdAndUpdate(
        req.params.id,
        { Funciones: pos.Funciones },
        { new: true }
      )
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/remove/funcion/:id", (req, res, next) => {
  const Funcion = req.body;
  let FunctiontoRemove = Object.values(Funcion).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.Funciones.pull(FunctiontoRemove);
    dpt
      .findByIdAndUpdate(
        req.params.id,
        { Funciones: pos.Funciones },
        { new: true }
      )
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/add/tarea/:id", (req, res, next) => {
  const Tarea = req.body;
  let TareatoAdd = Tarea;
  console.log(TareatoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.Tareas.unshift(TareatoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { Tareas: pos.Tareas }, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/remove/tarea/:id", (req, res, next) => {
  const Tarea = req.body;
  let TareatoRemove = Tarea.tarea;
  console.log(TareatoRemove);

  dpt.findById(req.params.id).then(pos => {
    actual = pos.Tareas.pull(TareatoRemove);
    dpt
      .findByIdAndUpdate(req.params.id, { Tareas: pos.Tareas }, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/add/certificacion/:id", (req, res, next) => {
  const Certificacion = req.body;
  let CertificaciontoAdd = Certificacion.certificacion;
  console.log(CertificaciontoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.ConocExper.Certificaciones.unshift(CertificaciontoAdd);
    console.log(pos.ConocExper.Certificaciones);
    dpt
      .findByIdAndUpdate(req.params.id, { 'ConocExper.Certificaciones': pos.ConocExper.Certificaciones}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/add/habilidad/:id", (req, res, next) => {
  const Habilidad = req.body;
  let HabilidadtoAdd = Habilidad.habilidad;

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.ConocExper.Habilidades.unshift(HabilidadtoAdd);
    console.log(pos.ConocExper.Certificaciones);
    dpt
      .findByIdAndUpdate(req.params.id, { 'ConocExper.Habilidades': pos.ConocExper.Habilidades}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/remove/certificacion/:id", (req, res, next) => {
  const Certificacion = req.body;
  let CertificaciontoRemove = Object.values(Certificacion).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.ConocExper.Certificaciones.pull(CertificaciontoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ConocExper.Certificaciones': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/remove/habilidad/:id", (req, res, next) => {
  const Habilidad = req.body;
  let HabilidadtoRemove = Object.values(Habilidad).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.ConocExper.Habilidades.pull(HabilidadtoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ConocExper.Habilidades': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/add/formacion/:id", (req, res, next) => {
  const Formacion = req.body;
  let FormaciontoAdd = Formacion.formacion;
  console.log(Formacion);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.ConocExper.FormCompl.push(FormaciontoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { 'ConocExper.FormCompl': pos.ConocExper.FormCompl}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/remove/formacion/:id", (req, res, next) => {
  const Formacion = req.body;
  let FormaciontoRemove = Object.values(Formacion).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.ConocExper.FormCompl.pull(FormaciontoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ConocExper.FormCompl': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/add/idioma/:id", (req, res, next) => {
  const Idioma = req.body;
  let IdiomatoAdd = Idioma;
  console.log(IdiomatoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.ConocExper.Idiomas.unshift(IdiomatoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { 'ConocExper.Idiomas': pos.ConocExper.Idiomas }, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/remove/idioma/:id", (req, res, next) => {
  const Idioma = req.body;
  let IdiomatoRemove = Idioma.idioma
  console.log(IdiomatoRemove);


  dpt.findById(req.params.id).then(pos => {
    actual = pos.ConocExper.Idiomas.pull(IdiomatoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ConocExper.Idiomas': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/add/guia/:id", (req, res, next) => {
  const Guia = req.body;
  let GuiatoAdd = Guia.guia;
  console.log(GuiatoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.ResponsAut.GuiaOrientRecibidas.push(GuiatoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { 'ResponsAut.GuiaOrientRecibidas': pos.ResponsAut.GuiaOrientRecibidas}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/remove/guia/:id", (req, res, next) => {
  const Guia = req.body;
  let GuiatoRemove = Object.values(Guia).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.ResponsAut.GuiaOrientRecibidas.pull(GuiatoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ResponsAut.GuiaOrientRecibidas': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/add/supervision/:id", (req, res, next) => {
  const Supervision = req.body;
  let SupervisiontoAdd = Supervision.supervision;
  console.log(SupervisiontoAdd);

  dpt.findById(req.params.id).then(pos => {
    pos.ResponsAut.GradoSuperv.push(SupervisiontoAdd);
    dpt
    .findByIdAndUpdate(req.params.id, { 'ResponsAut.GradoSuperv': pos.ResponsAut.GradoSuperv}, { new: true })
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
  });
});
router.put("/remove/supervision/:id", (req, res, next) => {
  const Supervision = req.body;
  let SupervisiontoRemove = Object.values(Supervision).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.ResponsAut.GradoSuperv.pull(SupervisiontoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'ResponsAut.GradoSuperv': actual },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/add/relinterna/:id", (req, res, next) => {
  const Relacion = req.body;
  let RelaciontoAdd = Relacion.interna;
  console.log(RelaciontoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.RelacFuncionales.RelInternas.push(RelaciontoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { 'RelacFuncionales.RelInternas': pos.RelacFuncionales.RelInternas}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/remove/relinterna/:id", (req, res, next) => {
  const Relacion = req.body;
  let RelaciontoRemove = Object.values(Relacion).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.RelacFuncionales.RelInternas.pull(RelaciontoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'RelacFuncionales.RelInternas': pos.RelacFuncionales.RelInternas },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});
router.put("/add/relexterna/:id", (req, res, next) => {
  const Relacion = req.body;
  let RelaciontoAdd = Relacion.externa;
  console.log(RelaciontoAdd);

  dpt.findById(req.params.id).then(pos => {
    actualiz = pos.RelacFuncionales.RelExternas.push(RelaciontoAdd);
    dpt
      .findByIdAndUpdate(req.params.id, { 'RelacFuncionales.RelExternas': pos.RelacFuncionales.RelExternas}, { new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});




router.put("/remove/relexterna/:id", (req, res, next) => {
  const Relacion = req.body;
  let RelaciontoRemove = Object.values(Relacion).toString();

  dpt.findById(req.params.id).then(pos => {
    actual = pos.RelacFuncionales.RelExternas.pull(RelaciontoRemove);
    dpt
      .findByIdAndUpdate(req.params.id,{ 'RelacFuncionales.RelExternas': pos.RelacFuncionales.RelExternas },{ new: true })
      .then(position => res.status(200).json())
      .catch(err => console.log(err));
  });
});

router.put("/edit/condiciones/:id", (req, res, next) => {
  const {
    Dedicacion,
    Dificultad,
    Responsabilidad,
    JornadaPartida,
    Turnicidad,
    PeligrosidadPenosidad
  } = req.body;
  let editedCondiciones = {
    Dedicacion: Dedicacion,
    Dificultad: Dificultad,
    Responsabilidad: Responsabilidad,
    JornadaPartida: JornadaPartida,
    Turnicidad: Turnicidad,
    PeligrosidadPenosidad: PeligrosidadPenosidad
  };
  editedCondiciones = _.pickBy(editedCondiciones);
  console.log(editedCondiciones);

  dpt
    .findByIdAndUpdate(
      req.params.id,
      { Condiciones: editedCondiciones },
      { new: true }
    )
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
});

router.put("/edit/conocimientos/:id", (req, res, next) => {
  const {
    Nivel,
    Titulo,
    Certificaciones,
    FormCompl,
    Idiomas,
    Actividad,
    Tiempo,
    Habilidades
  } = req.body;
  let editedConocExper = {
    FormReglada: {
      Nivel: Nivel,
      Titulo: Titulo
    },
    FormCompl: FormCompl,
    Certificaciones: Certificaciones,
    Idiomas: Idiomas,
    ExperPrevia: {
      Actividad: Actividad,
      Tiempo: Tiempo
    },
    Habilidades: Habilidades
  }
  console.log(editedConocExper);

  dpt
    .findByIdAndUpdate(
      req.params.id,
      { ConocExper: editedConocExper },
      { new: true }
    )
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
});

router.put("/edit/responsaut/:id", (req, res, next) => {
  const {
    DependFuncional,
    GradoSuperv,
    GuiaOrientRecibidas,
    MagnitDecisiones,
    ResponsabilidadMando,
    Subordinados
  } = req.body;
  let editedResponsAut = {
    DependFuncional: DependFuncional,
    GradoSuperv: GradoSuperv,
    GuiaOrientRecibidas: GuiaOrientRecibidas,
    MagnitDecisiones: MagnitDecisiones,
    ResponsabilidadMando: ResponsabilidadMando,
    Subordinados: Subordinados
  }
  console.log(editedResponsAut);

  dpt
    .findByIdAndUpdate(
      req.params.id,
      { ResponsAut: editedResponsAut },
      { new: true }
    )
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
});

router.put("/edit/ficha/:id", (req, res, next) => {
  const {
    DenomPuesto,
    CodigoDPT,
    Area,
    Unidad,
    Escala,
    Subescala,
    Categoria,
    Grupo,
    Colectivo,
    FormaProvision,
    Tipo,
    NumPuestos
  } = req.body;
  let editedFicha = {
    DenomPuesto: DenomPuesto,
    CodigoDPT: CodigoDPT,
    Area: Area,
    Unidad: Unidad,
    Escala: Escala,
    Subescala: Subescala,
    Categoria: Categoria,
    Grupo: Grupo,
    Colectivo: Colectivo,
    FormaProvision: FormaProvision,
    Tipo: Tipo,
    NumPuestosHomog: NumPuestos
  };
  editedFicha = _.pickBy(editedFicha);
  console.log(editedFicha);

  dpt
    .findByIdAndUpdate(req.params.id, { FichaDPT: editedFicha }, { new: true })
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
});

router.put("/edit/mision/:id", (req, res, next) => {
  console.log(req.body);
  const { Mision } = req.body;
  let editedMision = { Mision: Mision };
  editedMision = _.pickBy(editedMision);
  console.log(editedMision);

  dpt
    .findByIdAndUpdate(req.params.id, editedMision, { new: true })
    .then(position => res.status(200).json())
    .catch(err => console.log(err));
});

module.exports = router;
