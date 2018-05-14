# PlatformOS Starter Admin

This project is a starter admin for PlatformOS (pOS).

Note: Currently this is not a fully working admin, and is not designed for production sites. It is designed for new pOS Partners who want to learn more about pOS and/or want a jumpstart to building a custom admin.

A “typical” pOS project uses a combination of layouts, pages, and partials. This project relies on layouts and partials.

## Included

This project includes:
- Foundation 6.4.3
- Font Awesome 5.0.9
- jQuery 3.3.1
- Pre-built layout
- Config file

## Getting Started

The PlatformOS Starter Admin can be added to a new or existing pOS project.

To get started clone or download this repository. To download a zip file, click the 'Download ZIP' button which is located under the 'Clone or download' dropdown.

## Config File

To change the logo, menu items, or other "global" variables update the config file:

views > partials > admin > starter > settings > _config.liquid

Essentially it's a json file where you can add global variables. The default layout uses this file to populate the logo, menu items, landing page, etc.

The json data can be output using {{site}}

## Customize CSS and JS

To change the appearance of the admin interface use the "custom.css" file:

assets > css > admin > starter > custom.css

To add custom javascript use "custom.js" file:

assets > scripts > admin > starter > custom.js

## Views

In a typical PlatformOS Project, you would create a view by adding a page. The Starter Admin uses partials instead.

To add a new view, create a folder in views > partials > admin > starter

In the newly created folder create a file "_index.liquid". Add your content to this file.

Let's say you created a folder called "blog", the path would be...

views > partials > admin > starter > blog > index.liquid

To view the content the url would be https://mysite.com/admin/starter/blog

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
