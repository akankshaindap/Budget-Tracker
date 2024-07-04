import { redirect } from "react-router-dom";
import { deleteItem } from "../helper";
import { toast } from "react-toastify";
export async function logoutAction() {
     deleteItem({
          key: "username"
     })
     toast.success("Deleted User")
     return redirect('/')
}