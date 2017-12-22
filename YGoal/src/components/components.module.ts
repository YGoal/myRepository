import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product';
import { LogoComponent } from './logo/logo';

@NgModule({
	declarations: [
    ProductComponent,
    LogoComponent,],
	imports: [],
	exports: [
    ProductComponent,
    LogoComponent,]
})
export class ComponentsModule {}
