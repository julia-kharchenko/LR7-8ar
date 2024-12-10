import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "@/lib/actions";

const DeleteUserForm = ({ _id, name }) => {
  const queryClient = useQueryClient();

  const form = useForm();

  const deleteMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleDeleteUserSubmit = ({ id }) => {
    deleteMutation.mutate(id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Trash className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Delete User {name}</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this user?
        </DialogDescription>
        <form
          onSubmit={form.handleSubmit(handleDeleteUserSubmit)}
          id="delete-user-form"
        >
          <input type="hidden" {...form.register("id")} value={_id} />
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              form="delete-user-form"
              variant="destructive"
              type="submit"
              disabled={deleteMutation.isLoading}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserForm;
