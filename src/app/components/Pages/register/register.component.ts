import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentTypeModel } from 'src/app/Models/DocumentType/DocumentTypeModel';
import { GetRolModel } from 'src/app/Models/Rol/RolModel';
import { CreateUserModel } from 'src/app/Models/Users/CreateUserModel';
import { UserServiceService } from 'src/app/services/Users/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registroForm: FormGroup;
    imagenSeleccionada: File = new File([],'');
    imagenBase64: string = '';
    constructor
    (
      private formBuilder: FormBuilder,
      private userService : UserServiceService
    ) {

      this.registroForm = this.formBuilder.group({
        name: ['Martinez', Validators.required],
        image: ['', Validators.required],
        lastName: ['LastName', Validators.required],
        secondLastName:['SecudLastName', Validators.required],
        dateOfBirth: ['', Validators.required],
        numberPhone: ['30203993323', Validators.required],
        document: ['1101878732', Validators.required],
        email: ['luisandremartinez@gmail.com', Validators.required],
        password: ['Hola123*', Validators.required],
        documentTypeId: ['1',Validators.required],
        addressId: ['0',Validators.required],
        rolId: ['1', Validators.required]
      });
    }

    uploadFile(file:Blob){
      const dto = new FormData()
      dto.append('image',file);
    }

    onUploadFile(event:Event){
      const elemento = event.target as HTMLInputElement;
      const file = elemento.files?.item(0);
      if(file){
        this.imagenSeleccionada = file;
      }
    }

    createUser() {

      console.log("Base64 a enviar",this.imagenBase64)
      // Crear un nuevo objeto de usuario para enviar al backend
      const usuarioEnviar: CreateUserModel = {
        name: this.registroForm.value.name,
        image:this.convertFromBase64ToBytes(this.imagenBase64).toString(),
        lastName: this.registroForm.value.lastName,
        secondLastName: this.registroForm.value.secondLastName,
        dateOfBirth: this.registroForm.value.dateOfBirth,
        numberPhone: this.registroForm.value.numberPhone,
        document: this.registroForm.value.document,
        email: this.registroForm.value.email,
        password: this.registroForm.value.password,
        documentTypeId: this.registroForm.value.documentTypeId,
        addressId: this.registroForm.value.addressId,
        rolId: this.registroForm.value.rolId
      };

      this.userService.create(usuarioEnviar).subscribe(response =>{
        console.log(response)
      })
    }
    convertFromBase64ToBytes(base64String: string): Uint8Array {
      const raw = atob(base64String.replace(/^data:image\/\w+;base64,/, ''));
      const length = raw.length;
      const bytes = new Uint8Array(length);

      for (let i = 0; i < length; i++) {
        bytes[i] = raw.charCodeAt(i);
      }
      return bytes;
    }
    onFileChange(event: any) {
      this.imagenSeleccionada = event.target.files[0];
      if (this.imagenSeleccionada) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagenBase64 = e.target.result;
          console.log("Base64",this.imagenBase64)
        };
        reader.readAsDataURL(this.imagenSeleccionada);
      }
    }
  }











