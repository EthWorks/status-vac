# Vac

## Requirements

- [Bundler](http://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Ruby](https://www.ruby-lang.org/en/)

## Get started

### Setting up bundler and jekyll on Apple M1 (with system installed ruby x86_64)

Running inside project directory:

- `arch -x86_64 gem install --user-install bundler jekyll`
- `echo 'export PATH="~/.gem/ruby/2.6.0/bin:$PATH"' >> ~/.zshrc`
- `bundle update`

### Working with the project

- `bundle install` to install Ruby gems
- `npm ci` to install npm packages listed in `package-lock.json`
- `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## License

[MIT](https://github.com/taylorbryant/jekyll-starter-tailwind/blob/master/LICENSE.md
