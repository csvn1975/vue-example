//import Home from '../components/Home.vue'
import Slider from '../components/Slider.vue'
//import  UploadSingleFile from '../components/UploadSingleFile'
import  UploadMultiFiles from '../components/UploadMultiFiles'
//import  DragDialogDemo from '../views/components-demo/drag-dialog.vue'
//import  DragSelectDemo from '../views/components-demo/drag-select.vue'
import  BackToTopDemo from '../components/BackToTop/back-to-top.vue'
import   MixChart  from '../components/Charts/MixChart.vue'
import   UI  from '../components/UI'

const routes = [
   
    {
        path: '/ui',
        name: 'ui',
        component: UI,
        meta: {
            title: 'Elements UI',
            icon: 'el-icon-menu',
        },

        children: [
            {
                path: '/ui/form',
                component: () => import('../components/UI/components/Form'),
                name: 'Form',
                meta: {
                    title: 'Form',
                    icon: 'el-icon-s-unfold',
                }
            },
            
            {
                path: '/ui/alert',
                component: () => import('../components/UI/components/Alert'),
                name: 'Alert',
                meta: {
                    title: 'Alert',
                    icon: 'el-icon-s-unfold',
                }
            },
        ]
    },
    
    {
        path: '/backtotop',
        name: 'BackToTopDemo',
        component: BackToTopDemo,
        meta: {
            title: 'BackToTop',
            icon: "el-icon-menu",
        },
    },


    {
        path: '/charts',
        name: 'charts',
        component: MixChart, 
        meta: {
            title: 'Charts',
            icon: "el-icon-menu",
        },
    },

    {
        path: '/slider',
        name: 'slider',
        component: Slider, 
        meta: {
            title: 'Slider',
            icon: "el-icon-menu",
        },
    },

   /*  {
        path: '/upload',
        name: 'upload',
        component: UploadSingleFile,
        meta: {
            title: 'Upload file',
            icon: "el-icon-menu",
        },
    }, */

    {
        path: '/uploadfiles',
        name: 'uploadfiles',
        component: UploadMultiFiles,
        meta: {
            title: 'Upload multi files',
            icon: "el-icon-menu",
        },
    },

    /* {
        path: '/dragdialog',
        name: 'dragdialog',
        hidden: false,
        component: DragDialogDemo,
        meta: {
            title: 'Drag Dialog',
            icon: "el-icon-menu",
        },
    }, */

    /* {
        path: '/dragselect',
        name: 'dragselect',
        hidden: false,
        component: DragSelectDemo,
        meta: {
            title: 'Drag Select',
            icon: "el-icon-menu",
        },
    }, */
]

export default routes;
