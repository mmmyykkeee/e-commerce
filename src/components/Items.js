import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="container">
      <div className="row mx-5 featured__filter">
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3 vegetables fastfood">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-2.jpg"
              title="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Banana
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-3.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pears
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-4.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Watermelon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-5.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Grapes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-6.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Burger
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-7.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mango
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-8.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Apple
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 pt-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="img/featured/feature-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia. Soluta nisi quibusdam laborum similique assumenda vel repudiandae id dolor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Like
                <a href="#">
                  <i className="fa fa-heart mx-2 text-danger fs-1"></i>
                </a>
              </Button>

              <Button size="small">Contact Seller</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

