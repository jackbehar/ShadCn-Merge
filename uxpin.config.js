module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Accordion/Accordion.jsx',
          'src/components/Alert/Alert.jsx',
          'src/components/AlertDialog/AlertDialog.jsx',
          'src/components/AspectRatio/AspectRatio.jsx',
          'src/components/Avatar/Avatar.jsx',
          'src/components/Button/Button.tsx',
          'src/components/Badge/Badge.jsx',
          'src/components/Card/Card.jsx',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/Collapsible/Collapsible.jsx',
          'src/components/DropdownMenu/DropdownMenu.jsx',
          'src/components/Image/Image.js',
          'src/components/Slider/Slider.jsx',
          'src/components/Label/Label.jsx',
          'src/components/Pagination/Pagination.jsx',
        ],
      },
      {
        name: 'HTML',
        include: [
          'src/components/HtmlComponents/HtmlHeading/HtmlHeading.jsx',
          'src/components/HtmlComponents/HtmlText/HtmlText.jsx',
          'src/components/HtmlComponents/HtmlDiv/HtmlDiv.jsx',
          'src/components/HtmlComponents/HtmlList/HtmlList.jsx',
          'src/components/HtmlComponents/HtmlListItem/HtmlListItem.jsx',
          'src/components/HtmlComponents/HtmlTable/HtmlTable.jsx',
          'src/components/HtmlComponents/HtmlTableHead/HtmlTableHead.jsx',
          'src/components/HtmlComponents/HtmlTableBody/HtmlTableBody.jsx',
          'src/components/HtmlComponents/HtmlTableHeading/HtmlTableHeading.jsx',
          'src/components/HtmlComponents/HtmlTableRow/HtmlTableRow.jsx',
          'src/components/HtmlComponents/HtmlTableCell/HtmlTableCell.jsx',
          'src/components/HtmlComponents/HtmlTag/HtmlTag.jsx',
        ],
      },
      {
        name: 'CHILDREN COMPONENTS',
        include: [
          'src/components/AccordionTrigger/AccordionTrigger.jsx',
          'src/components/AccordionItem/AccordionItem.jsx',
          'src/components/AccordionContent/AccordionContent.jsx',
          'src/components/AlertTitle/AlertTitle.jsx',
          'src/components/AlertDescription/AlertDescription.jsx',
          'src/components/AlertDialogAction/AlertDialogAction.jsx',
          'src/components/AlertDialogCancel/AlertDialogCancel.jsx',
          'src/components/AlertDialogContent/AlertDialogContent.jsx',
          'src/components/AlertDialogDescription/AlertDialogDescription.jsx',
          'src/components/AlertDialogFooter/AlertDialogFooter.jsx',
          'src/components/AlertDialogHeader/AlertDialogHeader.jsx',
          'src/components/AlertDialogTitle/AlertDialogTitle.jsx',
          'src/components/AlertDialogTrigger/AlertDialogTrigger.jsx',
          'src/components/AlertDialogPortal/AlertDialogPortal.jsx',
          'src/components/AvatarImage/AvatarImage.jsx',
          'src/components/AvatarFallback/AvatarFallback.jsx',
          'src/components/CardContent/CardContent.jsx',
          'src/components/CardDescription/CardDescription.jsx',
          'src/components/CardFooter/CardFooter.jsx',
          'src/components/CardHeader/CardHeader.jsx',
          'src/components/CardTitle/CardTitle.jsx',
          'src/components/CollapsibleContent/CollapsibleContent.jsx',
          'src/components/CollapsibleTrigger/CollapsibleTrigger.jsx',
          'src/components/DropdownMenuContent/DropdownMenuContent.jsx',
          'src/components/DropdownMenuGroup/DropdownMenuGroup.jsx',
          'src/components/DropdownMenuItem/DropdownMenuItem.jsx',
          'src/components/DropdownMenuLabel/DropdownMenuLabel.jsx',
          'src/components/DropdownMenuPortal/DropdownMenuPortal.jsx',
          'src/components/DropdownMenuSeparator/DropdownMenuSeparator.jsx',
          'src/components/DropdownMenuShortcut/DropdownMenuShortcut.jsx',
          'src/components/DropdownMenuSub/DropdownMenuSub.jsx',
          'src/components/DropdownMenuSubTrigger/DropdownMenuSubTrigger.jsx',
          'src/components/DropdownMenuSubContent/DropdownMenuSubContent.jsx',
          'src/components/DropdownMenuTrigger/DropdownMenuTrigger.jsx',
          'src/components/DropdownMenuCheckboxItem/DropdownMenuCheckboxItem.jsx',
          'src/components/DropdownMenuRadioGroup/DropdownMenuRadioGroup.jsx',
          'src/components/DropdownMenuRadioItem/DropdownMenuRadioItem.jsx',
          'src/components/PaginationContent/PaginationContent.jsx',
          'src/components/PaginationItem/PaginationItem.jsx',
          'src/components/PaginationLink/PaginationLink.jsx',
          'src/components/PaginationNext/PaginationNext.jsx',
          'src/components/PaginationPrevious/PaginationPrevious.jsx',
          'src/components/PaginationEllipsis/PaginationEllipsis.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  settings: { useUXPinProps: true, useConvertingToUXPinClassic: true },
  name: 'ShadCN Design System',
};
