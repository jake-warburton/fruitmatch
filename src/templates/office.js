module.exports = {
  name: 'Office',
  style: {
    background: '#fff',
    width: 600,
    lineHeight: 1.5,
  },
  layout: {
    'key-978fb79c-8cb1-47f5-85d9-109206861900': {
      name: 'header',
      type: 'row',
      style: {
        height: 120,
      },
      columns: {
        'key-bf37a1da-b2aa-4a80-b7af-8648c01e1c4c': {
          style: {
            padding: '0px 0px 0px 0px',
            color: '#000000',
            background: '#ffffff',
          },
          content: 'nice 2<br>',
          align: 5,
        },
      },
    },
    'key-bff72715-b0d5-4909-ad8c-dbae76a7087b': {
      name: 'hero',
      type: 'row',
      style: {
        height: 120,
      },
      columns: {
        'key-691eb294-524e-4682-915c-c60f555a89b0': {
          style: {
            padding: '0px 0px 0px 0px',
            color: '#ffffff',
            background: '#9b9b9b',
          },
          content: '<p>Hero image</p>',
          align: 5,
        },
      },
    },
    'key-1f96c847-ab20-4970-9e63-0e6ac6f3d27d': {
      name: 'about',
      type: 'row',
      style: {
        height: 120,
      },
      columns: {
        'key-8b92375a-ca72-46c0-a6da-10c5c51cbcf2': {
          style: {
            padding: '0px 0px 0px 0px',
            color: '#000000',
            background: '#ffffff',
          },
          content: '<p>Column contents 1</p>',
          align: 5,
        },
        'key-79fc78b6-6895-4378-aae8-19b47dac70df': {
          style: {
            padding: '0px 0px 0px 0px',
            color: '#000000',
            background: '#ffffff',
          },
          content: '<ul><li>This</li><li>is</li><li>my</li><li>list</li></ul>',
          align: 5,
        },
        'key-d0bf733c-4a60-48b2-8f71-13a91ffb7314': {
          style: {
            padding: '0px 0px 0px 0px',
            color: '#000000',
            background: '#ffffff',
          },
          content: '<p>Contents 3</p>',
          align: 5,
        },
      },
    },
    'key-7847f642-9cae-48ab-88f8-ff28ccda5c36': {
      name: 'footer',
      type: 'row',
      style: {
        height: 120,
      },
      columns: {
        'key-23ea99c4-00cc-4a1e-807c-e13293648906': {
          style: {
            padding: '20px 0px 0px 0px',
            color: '#000000',
            background: '#9b9b9b',
          },
          content: '<p>Footer thing 1</p>',
          align: '2',
        },
      },
    },
  },
  html:
    '\n  <html>\n    <head></head>\n    <body style="font-family: \'Arial\';">\n    <style>\n    table {\n        border-spacing: 0;\n        border-collapse: collapse;\n        table-layout: fixed;\n    }\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    </style>\n    <table width="600" style="background: #fff">\n            <tbody>\n                <tr height="120">\n                    \n                        <td width="100%" style="height: 120px; display: table-cell; color: #000000; background: #ffffff; padding: 0px 0px 0px 0px; vertical-align: middle; text-align: center">\n                          nice 2<br>\n                        </td>\n                \n                   \n                </tr>\n            </tbody>\n        </table><table width="600" style="background: #fff">\n            <tbody>\n                <tr height="120">\n                    \n                        <td width="100%" style="height: 120px; display: table-cell; color: #ffffff; background: #9b9b9b; padding: 0px 0px 0px 0px; vertical-align: middle; text-align: center">\n                          <p>Hero image</p>\n                        </td>\n                \n                   \n                </tr>\n            </tbody>\n        </table><table width="600" style="background: #fff">\n            <tbody>\n                <tr height="120">\n                    \n                        <td width="33.333333333333336%" style="height: 120px; display: table-cell; color: #000000; background: #ffffff; padding: 0px 0px 0px 0px; vertical-align: middle; text-align: center">\n                          <p>Column contents 1</p>\n                        </td>\n                \n                        <td width="33.333333333333336%" style="height: 120px; display: table-cell; color: #000000; background: #ffffff; padding: 0px 0px 0px 0px; vertical-align: middle; text-align: center">\n                          <ul><li>This</li><li>is</li><li>my</li><li>list</li></ul>\n                        </td>\n                \n                        <td width="33.333333333333336%" style="height: 120px; display: table-cell; color: #000000; background: #ffffff; padding: 0px 0px 0px 0px; vertical-align: middle; text-align: center">\n                          <p>Contents 3</p>\n                        </td>\n                \n                   \n                </tr>\n            </tbody>\n        </table><table width="600" style="background: #fff">\n            <tbody>\n                <tr height="120">\n                    \n                        <td width="100%" style="height: 120px; display: table-cell; color: #000000; background: #9b9b9b; padding: 20px 0px 0px 0px; vertical-align: top; text-align: center">\n                          <p>Footer thing 1</p>\n                        </td>\n                \n                   \n                </tr>\n            </tbody>\n        </table>\n    </body>\n  </html>\n  ',
};
