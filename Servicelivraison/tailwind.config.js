const defaultTheme = require('tailwindcss/defaultTheme');

<<<<<<< HEAD
=======
/** @type {import('tailwindcss').Config} */
>>>>>>> 0574a2cec98c226abf2b523e160d2e95fbf8e589
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
<<<<<<< HEAD
=======
        './resources/js/**/*.jsx',
>>>>>>> 0574a2cec98c226abf2b523e160d2e95fbf8e589
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
