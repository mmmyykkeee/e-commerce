import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { CardDeck } from "reactstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Items = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      img: "https://picsum.photos/220/80",
      description: "Description 1",
      price: 10.0,
      liked: false,
      action: "X",
    },
    {
      id: 2,
      name: "Product 2",
      img: "https://picsum.photos/220/81",
      description: "Description 2",
      price: 20.0,
      liked: false,
      action: "X",
    },
    {
      id: 3,
      name: "Product 3",
      img: "https://picsum.photos/220/82",
      description: "Description 3",
      price: 30.0,
      liked: false,
      action: "X",
    },
    {
      id: 4,
      name: "Product 4",
      img: "https://picsum.photos/220/83",
      description: "Description 4",
      price: 40.0,
      liked: false,
      action: "X",
    },
    {
      id: 5,
      name: "Product 5",
      img: "https://picsum.photos/220/84",
      description: "Description 5",
      price: 50.0,
      liked: false,
      action: "X",
    },
    {
      id: 6,
      name: "Product 6",
      img: "https://picsum.photos/220/85",
      description: "Description 6",
      price: 60.0,
      liked: false,
      action: "X",
    },
    {
      id: 7,
      name: "Product 7",
      img: "https://picsum.photos/220/86",
      description: "Description 7",
      price: 70.0,
      liked: false,
      action: "X",
    },
    {
      id: 8,
      name: "Product 8",
      img: "https://picsum.photos/220/87",
      description: "Description 8",
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
              <Card key={product.id} className="border border-dark">
                <Card.Body>
                  <img src={product.img} />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button
                    variant={product.liked ? "danger" : "light"}
                    onClick={() => toggleLike(product.id)}
                  >
                    {product.liked ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </div>
      </div>
      <div className="row d-flex my-3 justify-content-center">
        <div c1assName="col-lg-12 my-3">
          <CardDeck>
            {products.slice(4, 8).map((product) => (
              <Card key={product.id} className="border border-dark">
                <Card.Body>
                  <img src={product.img} />

                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button
                    variant={product.liked ? "danger" : "light"}
                    onClick={() => toggleLike(product.id)}
                  >
                    {product.liked ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </Card.Body>
              </Card>
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

  const handleRemoveProduct = (product) => {
    setProducts(products.filter((p) => p !== product));
  };

  return (
    <div>
      <div className="my-5 d-flex justify-content-center container">
        <div className="text-center">
          <h3>WishList</h3>
          {likedProducts.length === 0 && <p>No items in the WishList</p>}
          {likedProducts.length > 0 && (
            <div>
              <div className="row">
                <div className="col-lg-12 my-1">
                  <CardDeck striped bordered hover>
                    {likedProducts.slice(0, 4).map((product) => (
                      <Card key={product.id} className="border border-dark">
                        <Card.Body>
                          <img src={product.img} alt={product.name} />
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                          <Card.Text>Price: {product.price}</Card.Text>
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            x
                          </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
                        <Card key={product.id} className="border border-dark">
                          <Card.Body>
                            <img src={product.img} alt={product.name} />
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              x
                            </Button>
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
