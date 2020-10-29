# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint         | method   | Description                                                          |
| ---------------  | -------- | -------------------------------------------------------------------- |
| `/customers`      | `GET`    | Retrieves a list of all the clients.                                 |
| `/customers/:id`  | `GET`    | Retrieves a specific client profile.                                 |
| `/customers/`     | `POST`   | Creates a new a client profile.                                      |
| `/customers/:id`  | `PATCH`  | Modifies specific(s) attribute(s) in a client profile                |
| `/customers/:id`  | `DELETE` | Deletes client profile                                               |
| `/stocks/`        | `GET`    | Retrives a list of the all items                                     |
| `/stocks/:id`     | `GET`    | Retrives specific item information                                   |
| `/stocks/`        | `POST`   | Creates a new item to your stock list                                |
| `/stocks/:id`     | `PATCH`  | Updates specific information about your item (quantity, price, etc.) |
| `/stocks/:id`     | `DELETE` | Deletes an item if it's no longer needed in your stock list          |
