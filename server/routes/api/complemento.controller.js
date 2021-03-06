const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vptsubcompls = require('../../models/vpt_subcomplementos_model')
const dpts = require('../../models/dpt_model');
// const loggedIn = require("../../utils/isAuthenticated");
const vptcompls = require("../../models/vpt_complementos_model");
const valors = require("../../models/vpt_model");
const retribcdestinos = require("../../models/retrib_cdestino");
const retribcomplCE = require("../../models/vpt_retribcomplCE_model");
const retribcomplCD = require("../../models/vpt_retribcomplCD_model");
const retribcomplCELaborales = require("../../models/vpt_retribcomplCELaborales_model");
const retribSubcomplCE = require("../../models/vpt_retribSubcomplCE_model");
const retribSubcomplCELaborales = require("../../models/vpt_retribSubcomplCELaborales");

const _ = require("lodash");

router.get("/complemento/:id", (req, res, next) => {
  vptcompls.findById(req.params.id)
  .populate("Subcomplementos")
  .then(complem => {
    const complementoAvgGrado = complem.Subcomplementos.reduce( function(tot, subcomplemento) {
      return tot + subcomplemento.Grado / complem.Subcomplementos.length;
  }, 0);
  const complementoAvgPuntos = complem.Subcomplementos.reduce( function(tot, subcomplemento) {
    return tot + subcomplemento.Puntos / complem.Subcomplementos.length;
}, 0);
  const complementoAvgRetribucion = complem.Subcomplementos.reduce( function(tot, subcomplemento) {
    return tot + parseFloat(subcomplemento.Retribucion) / complem.Subcomplementos.length;
}, 0);
    const complementoAvg = { complementoAvgGrado, complementoAvgPuntos, complementoAvgRetribucion };
    vptcompls.findByIdAndUpdate(req.params.id, {AvgGrado: complementoAvgGrado.toFixed(2), AvgPuntos: complementoAvgPuntos.toFixed(2), AvgRetribucion: complementoAvgRetribucion.toFixed(2) }, { new:true })
    .then(complemento => res.status(200).json())
    .catch(err => console.log(err));
  });
});

router.get("/valoracion/:id", (req, res, next) => {
  valors.findOne({ Position: req.params.id })
  .populate("Complementos.ComplEspecifico")
  .populate("Complementos.ComplDestino")
  .then(valoracion => {
    const TotCE = valoracion.Complementos.ComplEspecifico.reduce( function(tot, element) {
      return tot + (Number(element.AvgRetribucion) + Number(element.Retribucion));
  }, 0);
  const PuntosCD = valoracion.Complementos.ComplDestino.reduce(function(tot, element){
    return Math.round(tot + Number(element.Puntos))
  }, 0);
    valors.findByIdAndUpdate(valoracion.id, { 'Complementos.TotCE': TotCE.toFixed(2) }, { new:true })
    .then(valoracion => res.status(200).json())
    .catch(err => console.log(err));
    retribcdestinos.findOne({ Puntos: PuntosCD }).then(retribcdestino => {
      valors.findByIdAndUpdate(valoracion.id,  {'Complementos.TotCD': retribcdestino.Retribucion, 'Complementos.TotPuntosCD': PuntosCD}, { new: true })
      .then(valoracion => res.status(200).json())
    .catch(err => console.log(err));
    })
  });
});


router.get("/:id/complementodestino/:complemento", (req, res, next) => {
  vptcompls.findById(req.params.id).then(vpt => {
    vptcompls.find({ 'vpt.Complementos.ComplDestino._id': { $all: ['req.params.complemento'] }}).then(compl => {
    return res.status(200).json({compl});
  });
});
});

router.post("/add/subcomplemento", (req, res, next) => {

dpts.findOne( { CodigoDPT: req.body.CodDPT }).then(dpt => {
if (dpt.FichaDPT.Colectivo == '(L) Laboral'){

  retribSubcomplCELaborales.findOne( { Subcomplemento: req.body.SubComplemento, Grado: req.body.Grado }).then(retribucion => {

  const newSubcomplemento = new vptsubcompls({
    Complemento: req.body.Complemento,
    SubComplemento: req.body.SubComplemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: parseFloat(retribucion.Retribución).toFixed(2)
  });
  newSubcomplemento.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newSubcomplemento.errors) { return res.status(400).json(newSubcomplemento)}
    return res.status(200).json(newSubcomplemento)
  });

  vptcompls.findById(newSubcomplemento.Complemento).then(complemento => {
    actualiz = complemento.Subcomplementos.push(newSubcomplemento.id)
    vptcompls.findByIdAndUpdate(newSubcomplemento.Complemento, { Subcomplementos: complemento.Subcomplementos }, { new: true })
    .then(complemento => res.status(200).json())
    .catch(err => console.log(err));
  });
})
} else {
  retribSubcomplCE.findOne( { Subcomplemento: req.body.SubComplemento, Grado: req.body.Grado }).then(retribucion => {

  const newSubcomplemento = new vptsubcompls({
    CodDPT: req.body.CodDPT,
    Complemento: req.body.Complemento,
    SubComplemento: req.body.SubComplemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: parseFloat(retribucion.Retribución).toFixed(2)
  });
  newSubcomplemento.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newSubcomplemento.errors) { return res.status(400).json(newSubcomplemento)}
    return res.status(200).json(newSubcomplemento)
  });

  vptcompls.findById(newSubcomplemento.Complemento).then(complemento => {
    actualiz = complemento.Subcomplementos.push(newSubcomplemento.id)
    vptcompls.findByIdAndUpdate(newSubcomplemento.Complemento, { Subcomplementos: complemento.Subcomplementos }, { new: true })
    .then(complemento => res.status(200).json())
    .catch(err => console.log(err));
  });
})
}
})
})

router.post("/add/complementodestino", (req, res, next) => {
  retribcomplCD.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {

  const newComplemento = new vptcompls({
    Valor: req.body.Valor,
    CodDPT: req.body.CodDPT,
    Complemento: req.body.Complemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: retribucion.Retribucion,
  });

  newComplemento.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newComplemento.errors) { return res.status(400).json(newComplemento)}
    return res.status(200).json(newComplemento)
  });

  valors.findById(newComplemento.Valor).then(valoracion => {
    actualiz = valoracion.Complementos.ComplDestino.push(newComplemento.id)
    valors.findByIdAndUpdate(newComplemento.Valor, { 'Complementos.ComplDestino': valoracion.Complementos.ComplDestino }, { new: true })
    .then(valoracion => res.status(200).json())
    .catch(err => console.log(err));
  });
})
});
 

router.post("/add/complementoespecifico", (req, res, next) => {

dpts.findOne({ CodigoDPT: req.body.CodDPT }).then(dpt => {
if (dpt.FichaDPT.Colectivo == '(L) Laboral') {
 
  retribcomplCELaborales.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {

    const newComplemento = new vptcompls({
      Valor: req.body.Valor,
      CodDPT: req.body.CodDPT,
      Complemento: req.body.Complemento,
      Grado: req.body.Grado,
      Puntos: retribucion.Puntos,
      Retribucion: parseFloat(retribucion.Retribución).toFixed(2),
      Sucomplementos: [],
      AvgGrado: '',
      AvgPuntos: '',
      AvgRetribucion: ''
    });

  newComplemento.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newComplemento.errors) { return res.status(400).json(newComplemento)}
    return res.status(200).json(newComplemento)
  });

  valors.findById(newComplemento.Valor).then(valoracion => {
    actualiz = valoracion.Complementos.ComplEspecifico.push(newComplemento.id)
    valors.findByIdAndUpdate(newComplemento.Valor, { 'Complementos.ComplEspecifico': valoracion.Complementos.ComplEspecifico }, { new: true })
    .then(valoracion => res.status(200).json())
    .catch(err => console.log(err));
  });
})
} else {
  retribcomplCE.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {

    const newComplemento = new vptcompls({
      Valor: req.body.Valor,
      CodDPT: req.body.CodDPT,
      Complemento: req.body.Complemento,
      Grado: req.body.Grado,
      Puntos: retribucion.Puntos,
      Retribucion: parseFloat(retribucion.Retribución).toFixed(2),
      Sucomplementos: [],
      AvgGrado: '',
      AvgPuntos: '',
      AvgRetribucion: ''
    });

  newComplemento.save((err) => {
    if(err) { return res.status(500).json(err)}
    if (newComplemento.errors) { return res.status(400).json(newComplemento)}
    return res.status(200).json(newComplemento)
  });

  valors.findById(newComplemento.Valor).then(valoracion => {
    actualiz = valoracion.Complementos.ComplEspecifico.push(newComplemento.id)
    valors.findByIdAndUpdate(newComplemento.Valor, { 'Complementos.ComplEspecifico': valoracion.Complementos.ComplEspecifico }, { new: true })
    .then(valoracion => res.status(200).json())
    .catch(err => console.log(err));
  });
})
}
})
})

router.delete('/delete/complemento/:id', (req,res, next) => {
  const complId = req.params.id;
  
  vptcompls.findById(complId).then(complemento => {
    valors.findByIdAndUpdate(
      complemento.Valor,
    { $pullAll: { 'Complementos.ComplDestino': [complId], 'Complementos.ComplEspecifico': [complId] } },
    { new: true },
    function(err, data) {} 
  );
  vptcompls.findByIdAndRemove(complId)
  .then(() => {
    console.log('Delete!')
    return res.status(200).json()
  })
  .catch(err => next(err));
  });
  });

router.delete('/delete/subcomplemento/:id', (req,res, next) => {
const subcomplId = req.params.id;

vptsubcompls.findById(subcomplId).then(subcomplemento => {
  vptcompls.findByIdAndUpdate(
    subcomplemento.Complemento,
  { $pullAll: { Subcomplementos: [subcomplId] } },
  { new: true },
  function(err, data) {} 
);
vptsubcompls.findByIdAndRemove(subcomplId)
.then(() => {
  console.log('Delete!')
  return res.status(200).json()
})
.catch(err => next(err));
});
});

router.put('/edit/subcomplemento/:id', (req, res, next) => {
  dpts.findOne( { CodigoDPT: req.body.CodDPT }).then(dpt => {

    if (dpt.FichaDPT.Colectivo == '(L) Laboral'){

    retribSubcomplCELaborales.findOne( { Subcomplemento: req.body.SubComplemento, Grado: req.body.Grado }).then(retribucion => {
    let editedSubComplemento = { 
    Complemento: req.body.Complemento,
    CodDPT: req.body.CodDPT,
    SubComplemento: req.body.SubComplemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: parseFloat(retribucion.Retribución).toFixed(2)
   }


  vptsubcompls.findByIdAndUpdate(req.params.id, editedSubComplemento, { new: true })
  .then(subcomplemento => res.status(200).json(subcomplemento))
  .catch(err => console.log(err))
});
    } else {
      retribSubcomplCE.findOne( { Subcomplemento: req.body.SubComplemento, Grado: req.body.Grado }).then(retribucion => {
      let editedSubComplemento = { 
      Complemento: req.body.Complemento,
      CodDPT: req.body.CodDPT,
      SubComplemento: req.body.SubComplemento,
      Grado: req.body.Grado,
      Puntos: retribucion.Puntos,
      Retribucion: parseFloat(retribucion.Retribución).toFixed(2)
      }
    
      vptsubcompls.findByIdAndUpdate(req.params.id, editedSubComplemento, { new: true })
      .then(subcomplemento => res.status(200).json(subcomplemento))
      .catch(err => console.log(err))
    });
    }
  });
  });


router.put('/edit/complemento/:id', (req, res, next) => {
  dpts.findOne( { CodigoDPT: req.body.CodDPT }).then(dpt => {
    if (dpt.FichaDPT.Colectivo == '(L) Laboral'){
      retribcomplCELaborales.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {
  let editedComplemento = { 
    Valor: req.body.Valor,
    CodDPT: req.body.CodDPT,
    Complemento: req.body.Complemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: parseFloat(retribucion.Retribución).toFixed(2),
   }
  vptcompls.findByIdAndUpdate(req.params.id, editedComplemento, { new: true })
  .then(complemento => res.status(200).json(complemento))
  .catch(err => console.log(err))
});
    } else {
      retribcomplCE.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {
        let editedComplemento = { 
          Valor: req.body.Valor,
          CodDPT: req.body.CodDPT,
          Complemento: req.body.Complemento,
          Grado: req.body.Grado,
          Puntos: retribucion.Puntos,
          Retribucion: parseFloat(retribucion.Retribución).toFixed(2),
         }
        vptcompls.findByIdAndUpdate(req.params.id, editedComplemento, { new: true })
        .then(complemento => res.status(200).json(complemento))
        .catch(err => console.log(err))
      });
    }
  });
});

router.put('/edit/complementodest/:id', (req, res, next) => {
  
    retribcomplCD.findOne( { Complemento: req.body.Complemento, Grado: req.body.Grado }).then(retribucion => {
    let editedComplemento = { 
    Valor: req.body.Valor,
    CodDPT: req.body.CodDPT,
    Complemento: req.body.Complemento,
    Grado: req.body.Grado,
    Puntos: retribucion.Puntos,
    Retribucion: retribucion.Retribucion,
    AvgGrado: req.body.AvgGrado,
    AvgPuntos: req.body.AvgPuntos,
    AvgRetribucion: req.body.AvgRetribucion,
   }
  vptcompls.findByIdAndUpdate(req.params.id, editedComplemento, { new: true })
  .then(complemento => res.status(200).json(complemento))
  .catch(err => console.log(err))
});
   
  });



module.exports = router;
