import 'vuetify/styles'; // Global Vuetify styles
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import * as components from 'vuetify/components'; // Import Vuetify components
import * as directives from 'vuetify/directives'; // Import Vuetify directives

const vuetify = createVuetify({
    components, // Add components to the Vuetify instance
    directives, // Add directives to the Vuetify instance
    icons: {
        defaultSet: 'mdi'
    }
});

export default vuetify;
