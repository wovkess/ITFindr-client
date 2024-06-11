import { Link, Textarea } from "@chakra-ui/react";
import { Button } from "../LibComponents/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../LibComponents/ui/dialog"
import { Input } from "../LibComponents/ui/input"
import { Label } from "../LibComponents/ui/label"
import { useContext, useEffect } from "react";
import { Context } from "../index.js";
import { useState } from "react";


const MessageWindow = ({btn, profileUser}) => {
		const { store } = useContext(Context);
		const [subject, setSubject] = useState('');
		const [text, setText] = useState('');
		useEffect(() => {
			console.log(store.userEmail)
		})
    return (
        <Dialog className="max-w-[600px]">
            <DialogTrigger asChild>
          		<Link variant="outline">{btn}</Link>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Send mail</DialogTitle>
                <DialogDescription>
                	Here you can send email to this person
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Subject
                </Label>
                <Input
                    id="name"
                    placeholder="Here you can write the subject of your email"
                    className="col-span-3"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Text
                </Label>
                <Textarea
                    id="username"
                    placeholder="Here you can write the text of your email"
                    className="col-span-3"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" onClick={() => {store.sendMail(store.userEmail, profileUser.email, subject, text)}}>Send</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MessageWindow;