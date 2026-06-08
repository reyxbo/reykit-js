import { Link } from 'react-router-dom'

import { useIsMobile } from 'lib/react'
import { Button } from 'ui/button'
import { Badge } from 'ui/badge'
import { Label } from 'ui/label'
import { Input } from 'ui/input'
import { Textarea } from 'ui/textarea'
import { Checkbox } from 'ui/checkbox'
import { RadioGroup, RadioGroupItem } from 'ui/radio-group'
import { Switch } from 'ui/switch'
import { Toggle } from 'ui/toggle'
import { Kbd } from 'ui/kbd'
import { Progress } from 'ui/progress'
import { Slider } from 'ui/slider'
import { Calendar } from 'ui/calendar'
import { Spinner } from 'ui/spinner'
import { Separator } from 'ui/separator'
import { Skeleton } from 'ui/skeleton'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from 'ui/input-group'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from 'ui/button-group'
import { ToggleGroup, ToggleGroupItem } from 'ui/toggle-group'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from 'ui/select'
import {
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
} from 'ui/combobox'
import {
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
} from 'ui/dropdown-menu'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from 'ui/input-otp'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from 'ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'ui/collapsible'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui/accordion'
import { Alert, AlertDescription, AlertTitle } from 'ui/alert'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'ui/hover-card'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from 'ui/command'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from 'ui/carousel'
import { Popover, PopoverContent, PopoverTrigger } from 'ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/tooltip'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from 'ui/dialog'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogTitle,
    AlertDialogTrigger
} from 'ui/alert-dialog'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from 'ui/sheet'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from 'ui/drawer'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from 'ui/table'
import { Toaster } from 'ui/sonner'
import {
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
} from 'ui/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from 'ui/navigation-menu'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from 'ui/breadcrumb'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from 'ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'ui/tabs'
import { ScrollArea, ScrollBar } from 'ui/scroll-area'
import { AspectRatio } from 'ui/aspect-ratio'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from 'ui/resizable'
import {
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
} from 'ui/context-menu'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from 'ui/item'
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from 'ui/field'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from 'ui/empty'
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
    Sidebar,
    SidebarRail,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarSeparator,
    SidebarInput,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuSkeleton,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    useSidebar
}  from 'ui/sidebar'
import icon from 'ui/icon'

/**
 * Hook of return popup box component dictionary by media inquiries.
 * 
 * @returns Popup box component dictionary.
 */
function usePopupBox() {

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

export {
    icon,
    Link,
    Button,
    Badge,
    Label,
    Input,
    Textarea,
    Checkbox,
    RadioGroup,
    RadioGroupItem,
    Switch,
    Toggle,
    Kbd,
    Progress,
    Slider,
    Calendar,
    Spinner,
    Separator,
    Skeleton,
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
    ToggleGroup,
    ToggleGroupItem,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
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
    ComboboxSeparator,
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
    DropdownMenuTrigger,
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertDescription,
    AlertTitle,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogTitle,
    AlertDialogTrigger,
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    Toaster,
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
    MenubarTrigger,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    ScrollArea,
    ScrollBar,
    AspectRatio,
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
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
    ContextMenuTrigger,
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
    Sidebar,
    SidebarRail,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarSeparator,
    SidebarInput,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuSkeleton,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    useSidebar,
    usePopupBox
}
