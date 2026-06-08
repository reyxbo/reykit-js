import { Link } from 'react-router-dom';
import { Button } from '../../../component/ui/button';
import { Badge } from '../../../component/ui/badge';
import { Label } from '../../../component/ui/label';
import { Input } from '../../../component/ui/input';
import { Textarea } from '../../../component/ui/textarea';
import { Checkbox } from '../../../component/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../../component/ui/radio-group';
import { Switch } from '../../../component/ui/switch';
import { Toggle } from '../../../component/ui/toggle';
import { Kbd } from '../../../component/ui/kbd';
import { Progress } from '../../../component/ui/progress';
import { Slider } from '../../../component/ui/slider';
import { Calendar } from '../../../component/ui/calendar';
import { Spinner } from '../../../component/ui/spinner';
import { Separator } from '../../../component/ui/separator';
import { Skeleton } from '../../../component/ui/skeleton';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '../../../component/ui/input-group';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '../../../component/ui/button-group';
import { ToggleGroup, ToggleGroupItem } from '../../../component/ui/toggle-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '../../../component/ui/select';
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator } from '../../../component/ui/combobox';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../../../component/ui/dropdown-menu';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../../component/ui/input-otp';
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '../../../component/ui/avatar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../component/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../component/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '../../../component/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../component/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../component/ui/hover-card';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../../../component/ui/command';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../component/ui/carousel';
import { Popover, PopoverContent, PopoverTrigger } from '../../../component/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../component/ui/tooltip';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../../../component/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from '../../../component/ui/alert-dialog';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../../component/ui/sheet';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from '../../../component/ui/drawer';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../../../component/ui/table';
import { Toaster } from '../../../component/ui/sonner';
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../../../component/ui/menubar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../../../component/ui/navigation-menu';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../../component/ui/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../../../component/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../component/ui/tabs';
import { ScrollArea, ScrollBar } from '../../../component/ui/scroll-area';
import { AspectRatio } from '../../../component/ui/aspect-ratio';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../../component/ui/resizable';
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '../../../component/ui/context-menu';
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from '../../../component/ui/item';
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from '../../../component/ui/field';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../../../component/ui/empty';
import { SidebarProvider, SidebarInset, SidebarTrigger, Sidebar, SidebarRail, SidebarHeader, SidebarContent, SidebarFooter, SidebarSeparator, SidebarInput, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuSkeleton, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from '../../../component/ui/sidebar';
import { default as icon } from '../../../component/ui/icon';
/**
 * Hook of return popup box component dictionary by media inquiries.
 *
 * @returns Popup box component dictionary.
 */
declare function usePopupBox(): {
    PopupBox: typeof Popover;
    PopupBoxTrigger: typeof PopoverTrigger;
    PopupBoxContent: typeof PopoverContent;
} | {
    PopupBox: typeof HoverCard;
    PopupBoxTrigger: typeof HoverCardTrigger;
    PopupBoxContent: typeof HoverCardContent;
};
export { icon, Link, Button, Badge, Label, Input, Textarea, Checkbox, RadioGroup, RadioGroupItem, Switch, Toggle, Kbd, Progress, Slider, Calendar, Spinner, Separator, Skeleton, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, ToggleGroup, ToggleGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Collapsible, CollapsibleContent, CollapsibleTrigger, Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, HoverCard, HoverCardContent, HoverCardTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Popover, PopoverContent, PopoverTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Toaster, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Tabs, TabsContent, TabsList, TabsTrigger, ScrollArea, ScrollBar, AspectRatio, ResizableHandle, ResizablePanel, ResizablePanelGroup, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, SidebarProvider, SidebarInset, SidebarTrigger, Sidebar, SidebarRail, SidebarHeader, SidebarContent, SidebarFooter, SidebarSeparator, SidebarInput, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuSkeleton, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar, usePopupBox };
