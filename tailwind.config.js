module.exports = { darkMode: 'class', content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"], 
theme: { colors:{ 
    'first-color':{ 100:'#3c2829'},
    'second-color':{100:'#261a1a'},
    'third-color':{100:'#6e5c5d'},
    'fourth-color':{100:'#5b4c4c'},
    'another-one':{100:'#5a3d3e'},
    'another-one2':{100:'#785253'},
    'navbg':{100:'#201a16'},
    'menutextcolor':{100:'#bdb1b2;'},
    'search':{100:'#ccc'},
    'tab':{100:'#F8F9FA'}
   
},

// screens: {
//     xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
//     sm: { min: '576px', max: '980px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
//     md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
//     lg: { min: '1200px' }, // Desktop smallest.
//     xl: { min: '1159px' }, // Desktop wide.
//     xxl: { min: '1359px' } // Desktop widescreen.
//   },
    extend: {
        boxshadow: {
            '3xl': '0 0 6px 0 rgba(90,61,62,.3)',
        },
          
    }, }, 
plugins: [
    require('flowbite/plugin')], 
}