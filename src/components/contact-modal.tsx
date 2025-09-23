"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ContactModal() {
    return (
        <Dialog>
            <DialogTrigger>Contact</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact details:-</DialogTitle>
                    <DialogDescription className="text-md">
                        Amir Khan Sir: +974 3392 2764 <br />
                        Kakoli Biswas Ma&apos;am: +974 7774 8982 <br />       
                        Telma D&apos;Souza Ma&apos;am: +974 5534 4357 <br />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
