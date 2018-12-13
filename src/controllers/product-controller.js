'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({
                    active: true
                },
                'title price slug'
                )
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });

}

exports.getBySlug = (req, res, next) => {
    Product.findOne({
                slug: req.params.slug,
                active: true
            },
                'title description price slug tags'
            )
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });
}

exports.getByTag = (req, res, next) => {
    Product.find({
                tags: req.params.tag,
                active: true
            })
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).sens(e);
            });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    //product.title = req.body.title;
    product
        .save()
        .then(x => {
        res.status(201).send({
            message: "Produto cadastrado com sucesso!"
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao cadastrar", data: e
        });
    });
}

exports.put = (req, resp, next) => {

    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    })
    .then(x => {
        resp.status(200).send({
            message: "produto alterado com sucesso"
        });
    })
    .catch(e => {
        resp.status(400).send({
            message: "Erro ao alterar o produto",
            error: e
        });
    })
}

exports.delete = (req, resp, next) => {
    Product.findOneAndRemove(req.params.id)
    .then(x => {
        resp.status(200).send({
            message: "produto removido com sucesso"
        });
    })
    .catch(e => {
        resp.status(400).send({
            message: "Erro ao remover o produto",
            error: e
        });
    })
}
