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
import { EditIcon } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "react-query";
import { Form } from "../ui/form";
import FormInput from "./FormInput";
import { updateUser } from "@/lib/actions";

const EditUserForm = ({ _id, name, email, age }) => {
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name,
      email,
      age,
    },
  });

  const updateMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleUpdateUserSubmit = (data) => {
    updateMutation.mutate({ id: _id, data });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <EditIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="capitalize">Edit User {name}</DialogTitle>
        <DialogDescription>Edit an existing user</DialogDescription>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdateUserSubmit)}
            className="space-y-4"
            id="edit-user-form"
          >
            <FormInput name="name" control={form.control} label="Name" />
            <FormInput
              name="email"
              type="email"
              control={form.control}
              label="Email"
            />
            <FormInput
              name={"age"}
              type="number"
              control={form.control}
              label="Age"
              otherProps={{ min: 18, max: 100 }}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              form="edit-user-form"
              type="submit"
              className="w-full"
              disabled={updateMutation.isLoading}
            >
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserForm;
