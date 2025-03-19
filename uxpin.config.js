module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Alert/Alert.jsx',
          'src/components/AlertTitle/AlertTitle.jsx',
          'src/components/AlertDescription/AlertDescription.jsx',
          'src/components/AlertDialog/AlertDialog.jsx',
          'src/components/AlertDialogAction/AlertDialogAction.jsx',
          'src/components/AlertDialogCancel/AlertDialogCancel.jsx',
          'src/components/AlertDialogContent/AlertDialogContent.jsx',
          'src/components/AlertDialogDescription/AlertDialogDescription.jsx',
          'src/components/AlertDialogFooter/AlertDialogFooter.jsx',
          'src/components/AlertDialogHeader/AlertDialogHeader.jsx',
          'src/components/AlertDialogTitle/AlertDialogTitle.jsx',
          'src/components/AlertDialogTrigger/AlertDialogTrigger.jsx',
          'src/components/AlertDialogPortal/AlertDialogPortal.jsx',
          'src/components/Button/Button.tsx',
          'src/components/Badge/Badge.jsx',
          'src/components/Card/Card.jsx',
          'src/components/CardContent/CardContent.jsx',
          'src/components/CardDescription/CardDescription.jsx',
          'src/components/CardFooter/CardFooter.jsx',
          'src/components/CardHeader/CardHeader.jsx',
          'src/components/CardTitle/CardTitle.jsx',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/Slider/Slider.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  settings: { useUXPinProps: true, useConvertingToUXPinClassic: true },
  name: 'ShadCN Design System',
};
