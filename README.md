# dashui
Web Pembelajaran Bahasa Jepang dengan Metode yang menurut kami menyenangkan dan menghibur :D



### Built With

This section should list any major frameworks/libraries used to adonis your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [![Bulma CSS][Bootstrap.com]][Bootstrap-url]
* [![Adonis Js][adonisjs.com]][Adonisjs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```


<!-- ROADMAP -->
## Roadmap

- [x] Landing Pages
- [ ] Add views to another pages in landing page
- [ ] Add features aboout student to access module
- [ ] Dashboard
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily submit assignment
- [ ] Multi-language Support
    - [ ] English

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Notes

### Setup database
1. install the packages

```
npm install @adonisjs/lucid
```

2. configure lucid
```
node ace configure @adonisjs/lucid
```

3. make migration
migration merupakan setup schema table

```
node ace make:migration nama_table
```

setelah membuat table pada migration lanjut ke migration run

```
node ace make:migration run
```

4. running migration
```
node ace migration:run
```

### create shield
```
npm i @adonisjs/shield
```

```
node ace configure @adonisjs/shield
```

lalu tambahkan kernel.ts
```
() => import('@ioc:Adonis/Addons/Shield')
```

dibawah bodyparser

### seed database
1. create seeder file

```
node ace make:seeder User
```

2. menjalankan seeding
```
node ace db:seed
```


### authentication web based
```
npm i @adonisjs/auth
```

1. install session
```
npm i @adonisjs/session
```

2. configure session
```
node ace configure @adonisjs/session
```

3.

### membuat view
```
node ace make:view <nama file view>
```

