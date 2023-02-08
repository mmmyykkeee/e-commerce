import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { CardDeck } from "reactstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Items = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Meat",
      img: "img/featured/feature-1.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 10.0,
      liked: false,
      action: "X",
    },
    {
      id: 2,
      name: "Banana",
      img: "img/featured/feature-2.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 20.0,
      liked: false,
      action: "X",
    },
    {
      id: 3,
      name: "Carrots",
      img: "img/featured/feature-3.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 30.0,
      liked: false,
      action: "X",
    },
    {
      id: 4,
      name: "WaterMelon",
      img: "img/featured/feature-4.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 40.0,
      liked: false,
      action: "X",
    },
    {
      id: 5,
      name: "Ginger",
      img: "img/featured/feature-5.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 50.0,
      liked: false,
      action: "X",
    },
    {
      id: 6,
      name: "Potatoes",
      img: "img/featured/feature-6.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 60.0,
      liked: false,
      action: "X",
    },
    {
      id: 7,
      name: "Mango",
      img: "img/featured/feature-7.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 70.0,
      liked: false,
      action: "X",
    },
    {
      id: 8,
      name: "Apple",
      img: "img/featured/feature-8.jpg",
      description: "Check out all of these gorgeous mountain trips.",
      price: 80.0,
      liked: false,
      action: "X",
    },
  ]);

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        liked: savedProducts.some(
          (savedProduct) => savedProduct.id === product.id
        ),
      }))
    );
  }, []);

  const toggleLike = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          if (product.liked) {
            const newLikedProducts = JSON.parse(
              localStorage.getItem("likedProducts") || "[]"
            ).filter((savedProduct) => savedProduct.id !== id);
            localStorage.setItem(
              "likedProducts",
              JSON.stringify(newLikedProducts)
            );
          } else {
            localStorage.setItem(
              "likedProducts",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("likedProducts") || "[]"),
                { ...product, liked: !product.liked },
              ])
            );
          }
          return { ...product, liked: !product.liked };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <div className="row d-flex my-3 justify-content-center">
        <div c1assName="col-lg-12 my-3">
          <CardDeck>
            {products.slice(0, 4).map((product) => (
              <div
                className="card"
                key={product.id}
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="content">
                  <h2 className="title">{product.name}</h2>
                  <p className="copy mt-0">{product.description}</p>
                  <p className="mt-0 price">Price: {product.price}</p>
                  <Button
                    variant={product.liked ? "danger" : "light"}
                    onClick={() => toggleLike(product.id)}
                  >
                    {product.liked ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </div>
              </div>
            ))}
          </CardDeck>
        </div>
      </div>
      <div className="row d-flex my-3 justify-content-center">
        <div c1assName="col-lg-12 my-3">
          <CardDeck>
            {products.slice(4, 8).map((product) => (
              <div
                className="card"
                key={product.id}
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="content">
                  <h2 className="title">{product.name}</h2>
                  <p className="copy mt-0">{product.description}</p>
                  <p className="mt-0 price">Price: {product.price}</p>
                  <Button
                    variant={product.liked ? "danger" : "light"}
                    onClick={() => toggleLike(product.id)}
                  >
                    {product.liked ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </div>
              </div>
            ))}
          </CardDeck>
        </div>
      </div>
      <Row className="my-5">
        <Col className="text-center">
          <Link to="/WishList">
            <Button variant="primary">View Wish List</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

const WishLists = () => {
  const likedProducts = JSON.parse(
    localStorage.getItem("likedProducts") || "[]"
  );
  const [products, setProducts] = useState(likedProducts);

  // const handleRemoveProduct = (product) => {
  //   setProducts(products.filter((p) => p !== product));
  // };

  return (
    <div>
      <div className="my-5 d-flex justify-content-center container">
        <div className="text-center">
          <h2 className="font-weight-bold">WishList</h2>
          <br/>
          {likedProducts.length === 0 && <p>No items in the WishList</p>}
          {likedProducts.length > 0 && (
            <div>
              <div className="row">
                <div className="col-lg-12 my-1">
                  <CardDeck striped bordered hover>
                    {likedProducts.slice(0, 4).map((product) => (
                      <Card
                        key={product.id}
                        className="card border border-dark "
                        style={{
                          backgroundImage: `url(${product.img})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        <Card.Body className="row">
                          <div className="content col-12">
                            <h2 className="title">{product.name}</h2>
                            <p className="copy mt-0">{product.description}</p>
                            <p className="mt-0 price">Price: {product.price}</p>
                          </div>
                          {/* <Button
                            variant="danger"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            x
                          </Button> */}
                        </Card.Body>
                      </Card>
                    ))}
                  </CardDeck>
                </div>
              </div>
              {likedProducts.length > 4 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(4, 8).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 8 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(8, 12).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 12 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(12, 16).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 16 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(16, 20).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 20 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(20, 24).map((product) => (
                        <Card key={product.id} className="border border-dark">
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 24 && (
                <div className="row">
                  <div className="col-lg-12 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(24, 28).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
              {likedProducts.length > 28 && (
                <div className="row">
                  <div className="col-lg-6 my-1">
                    <CardDeck striped bordered hover>
                      {likedProducts.slice(28, 32).map((product) => (
                        <Card
                          key={product.id}
                          className="card border border-dark "
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Card.Body className="row">
                            <div className="content col-12">
                              <h2 className="title">{product.name}</h2>
                              <p className="copy mt-0">{product.description}</p>
                              <p className="mt-0 price">
                                Price: {product.price}
                              </p>
                            </div>
                            {/* <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button> */}
                          </Card.Body>
                        </Card>
                      ))}
                    </CardDeck>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Link to="/Shop">
        <button className="btn btn-primary d-flex m-auto">Go Back</button>
      </Link>
    </div>
  );
};

export default Items;
export { WishLists };
