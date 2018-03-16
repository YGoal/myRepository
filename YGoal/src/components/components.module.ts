import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product';
import { LogoComponent } from './logo/logo';
import { MenuComponent } from './menu/menu';

@NgModule({
	declarations: [
    ProductComponent,
    LogoComponent,
    MenuComponent,],
	imports: [],
	exports: [
    ProductComponent,
    LogoComponent,
    MenuComponent,]
})
export class ComponentsModule {}
