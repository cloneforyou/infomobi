import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactHeadlineComponent } from './contact-headline/contact-headline';
import { ContactHeaderComponent } from './contact-header/contact-header';
import { DeskComponent } from './types/desk/desk';
import { UserComponent } from './types/user/user';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
	declarations: [
		ContactListComponent,
		ContactHeadlineComponent,
		ContactHeaderComponent,
		DeskComponent,
		UserComponent,
	],
	imports: [
		IonicModule,
		TranslateModule.forChild(),
		SharedModule
	],
	exports: [
		ContactListComponent,
		ContactHeadlineComponent,
		ContactHeaderComponent,
		IonicModule,
	],
	entryComponents: [
		DeskComponent,
		UserComponent,
	],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactsModule {}