import { Customer } from "@/types";

export function capitalizeWords(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function filterItemsWithRole(items: Customer[], selectedRole: string): Customer[] {
    return items.filter(item => item.role.toLowerCase() === selectedRole.toLowerCase());
}

export function filterItemsWithNameRole(items: Customer[], selectedRole: string, name: string): Customer[] {
    return items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) &&
        item.role.toLowerCase() === selectedRole.toLowerCase());
}