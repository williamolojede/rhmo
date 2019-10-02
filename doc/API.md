# API Documentation 

Base Url: [https://rhmo-sample-api.herokuapp.com](https://rhmo-sample-api.herokuapp.com)

Endpoints:
* [GET /providers]
* [POST /providers]
* [GET /provider/{id}]
* [POST /uploads]

---

 ## APIS

#### **`GET` /providers?q=<search query>**
> Get list of providers. To perform a search pass a query param to the endpoint.
> 

Response:`SUCCESS`
```
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Reliance Family Clinics",
            "rating": 5,
            "type": "clinic",
            "imageUrl": "https://via.placeholder.com/400x200",
            "location": {
                "state": "Lagos",
                "address": "Ayodeji Something street, Gbagada"
            }
        },
        ...
    ]
}
```
Response:`ERROR`
```
{
    "status":"error",
    "message":"Invalid Code"
    "data":{}
}
```

#### **`POST` /providers**
> Add a New Provider.
> 
Params:
```
{
	"name": "" | required,
	"state":"Oshogbo" | required,
  "address":"Oshogbo west" | required
	"type":"" | required,
	"imageUrl": "https://via.placeholder.com/400x200" | required,
	"rating":3.5
}
```

Response:`SUCCESS`
```
{
    "status": "success",
    "data": [
        {
            "id": 1,
        },
    ]
}
```
Response:`ERROR`
```
{
    "status":"error",
    "message":"Invalid Code"
    "data":{}
}
```

#### **`GET` /providers/{id} **
> Get details of a specific provider.
> 

Response:`SUCCESS`
```
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Reliance Family Clinics",
            "rating": 5,
            "type": "clinic",
            "imageUrl": "https://via.placeholder.com/400x200",
            "location": {
                "state": "Lagos",
                "address": "Ayodeji Something street, Gbagada"
            }
        },
        ...
    ]
}
```
Response:`ERROR`
```
{
    "status":"error",
    "message":"Invalid Code"
    "data":{}
}
```

---

#### **`POST` /uploads>**
> Upload an Image.
> 

```
Content-Type: multipart/form-data,
file: file1.{jpg | jpeg | png | gif }
```

Response:`SUCCESS`
```
{
    "status": "success",
    "data": [
        {
          "url": "https://via.placeholder.com/400x200",
        },
        ...
    ]
}
```
Response:`ERROR`
```
{
    "status":"error",
    "message":"Invalid Code"
    "data":{}
}
```
