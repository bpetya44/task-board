"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}

interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (id: string) => void;
}

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {

    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            label: "Boards",
            icon: <Layout className="h-4 w-4 mr-2"/>,
            href: `/organization/${organization.slug}`,
        },
        {
            label: "Activity",
            icon: <Activity className="h-4 w-4 mr-2"/>,
            href: `/organization/${organization.slug}/activity`,
        },
     
        {
            label: "Settings",
            icon: <Settings className="h-4 w-4 mr-2"/>,
            href: `/organization/${organization.slug}/settings`,
        },
        {
            label: "Billing",
            icon: <CreditCard className="h-4 w-4 mr-2"/>,
            href: `/organization/${organization.slug}/billing`,
        },
    ];

    const onClick = (href: string) => {
        router.push(href);
    };

    return (
       <AccordionItem 
        value={organization.id}
        className="border-none"
       >
            <AccordionTrigger
            onClick={() => onExpand(organization.id)}
            className={cn(
                "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                isActive && !isExpanded && "bg-sky-500/10 text-sky-700",
            )}
            >

                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image 
                            fill
                            src={organization.imageUrl}
                            alt={organization.name}
                            className="rounded-sm object-cover"
                        />

                    </div>
                    <span className="text-xs font-medium">
                        {organization.name} 
                    </span>

                </div>
        </AccordionTrigger>

        <AccordionContent className="pt-1 text-neutral-700">
                {routes.map(({ label, icon, href }) => (
                    <Button
                    key={href}
                    size="sm"
                    variant="ghost"
                    onClick={() => onClick(href)}
                    className={cn(
                        "w-full font-normal justify-start pl-10 mb-1",
                        pathname === href && "text-sky-700 bg-sky-500/10",
                    )}
                    >
                        {icon}
                        {label}
                    </Button>
                ))}

        </AccordionContent>

        </AccordionItem>
    );
}

NavItem.Skeleton = () => {
    return (
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative shrink-0">
                <Skeleton className="h-full w-full absolute"/>
            </div>
            <Skeleton className="h-4 w-full"/>
        </div>
    );
}