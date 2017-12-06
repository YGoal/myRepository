import { Component } from '@angular/core';
import { TodoService } from '../../providers/todo/todo';
import {NavController, AlertController, reorderArray, ToastController} from 'ionic-angular';
import { ArchivedTodosPage } from '../archived-todos/archived-todos';
import { ProductService } from "../../providers/product/product";
import { UserProvider } from "../../providers/user/user";

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnabled = false;
  public archivedTodosPage = ArchivedTodosPage;
  public allProducts = [];
  public allUsers = [];

  constructor(private userProvider : UserProvider, private productService : ProductService, private toastController: ToastController , private todoService: TodoService, public navCtrl: NavController, private alertController : AlertController) {
    this.todos = this.todoService.getTodos();
    this.userProvider.getUsers()
      .subscribe(usersList => console.log(usersList));
  }

  ionViewDidLoad(){
    let vat = this;
    this.productService.getProducts()
      .subscribe((response) => {
        vat.allProducts = response;
      });
    this.userProvider.getUsers()
      .subscribe((usersList) => {
        this.allUsers = usersList;
      });
    console.log(this.allUsers);
  }



  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  archiveTodo(todoIndex){
    console.log('HOME.TS ' + todoIndex);
    this.todoService.archiveTodo(todoIndex);
  }

  editTodo(todoIndex){
    this.todoService.editTodo(todoIndex);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add A Todo",
          handler: (inputData)=>{
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoService.addTodo(todoText);

            let addTodoToast = this.toastController.create({
              message: "Todo Added",
              duration: 2000
            });
            addTodoToast.present();
          }
        }
        ]
    });
    addTodoAlert.present();
  }


  openTodoEditAlert(index){
    let modifyTodoAlert = this.alertController.create({
      title: "Modify Todo",
      message: "Enter Your New Name",
      inputs: [
        {
          type: "text",
          name: "modifyTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Modify Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.modifyTodoInput;
            this.todoService.modifyTodo(todoText, index);

            modifyTodoAlert.onDidDismiss(() => {
              let modifyTodoToast = this.toastController.create({
                message: "Todo Modify",
                duration: 2000
              });
              modifyTodoToast.present();
            });

          }
          }
      ]
    });
    modifyTodoAlert.present();
  }


}
