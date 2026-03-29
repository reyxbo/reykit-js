import { useIsMobile } from '../../react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

export * as icon from 'lucide-react'
export { Link } from 'react-router-dom'

export { Button } from './button'
export { Badge } from './badge'
export { Label } from './label'
export { Input } from './input'
export { Textarea } from './textarea'
export { Checkbox } from './checkbox'
export { RadioGroup, RadioGroupItem } from './radio-group'
export { Switch } from './switch'
export { Toggle } from './toggle'
export { Kbd } from './kbd'
export { Progress } from './progress'
export { Slider } from './slider'
export { Calendar } from './calendar'
export { Spinner } from './spinner'
export { Separator } from './separator'
export { Skeleton } from './skeleton'
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from './input-group'
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'
export { ToggleGroup, ToggleGroupItem } from './toggle-group'
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from './select'
export {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxCollection,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator
} from './combobox'
export {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from './dropdown-menu'
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp'
export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './avatar'
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
export { Alert, AlertDescription, AlertTitle } from './alert'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
export { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './command'
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'
export { Popover, PopoverContent, PopoverTrigger } from './popover'
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from './dialog'
export { AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogTitle,
    AlertDialogTrigger
} from './alert-dialog'
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet'
export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from './drawer'
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './table'
export {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar
} from './sidebar'
export { Toaster } from './sonner'
export {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from './menubar'
export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './navigation-menu'
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './breadcrumb'
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './pagination'
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
export { ScrollArea, ScrollBar } from './scroll-area'
export { AspectRatio } from './aspect-ratio'
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable'
export {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger
} from './context-menu'
export { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from './item'
export { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from './field'
export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty'

/**
 * Hook of return popup box component dictionary by media inquiries.
 * 
 * @returns Popup box component dictionary.
 */
export function usePopupBox() {

    // Parameter.
    const isMobile = useIsMobile()
    const componentDict = isMobile ? {
        PopupBox: Popover,
        PopupBoxTrigger: PopoverTrigger,
        PopupBoxContent: PopoverContent
    } : {
        PopupBox: HoverCard,
        PopupBoxTrigger: HoverCardTrigger,
        PopupBoxContent: HoverCardContent
    }

    return componentDict
}
