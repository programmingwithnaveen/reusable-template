import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sample Template';
  homelabel = '';
  collection1 = '';

  logoutlabel = '';
  state = 'text';
  @ViewChild('menubar') menubar: ElementRef;
  @ViewChild('menucollapse') menucollapse: ElementRef;
  @ViewChild('menuList') menuList: ElementRef;

  @ViewChild('submenu') submenu: ElementRef;

  @ViewChild('maincont') maincont: ElementRef;
  @ViewChild('collection1Icon') collection1Icon: ElementRef;

  @ViewChild('menuIcon') menuIcon: ElementRef;


  searchCollapsed: boolean = false;


  constructor(private element: ElementRef) {

  }

  displayMenuList(): void {
    if (this.menuList.nativeElement.className.indexOf('w3-show') === -1) {
      this.menuList.nativeElement.className += ' w3-show';
      this.menuList.nativeElement.previousElementSibling.className += ' w3-green';
      this.showordersmenu();
      this.maincont.nativeElement.className = 'col-sm-10 mainContentpadding';
      this.collection1Icon.nativeElement.className = 'fa fa-chevron-up pull-right';
    } else {
      this.menuList.nativeElement.className = this.menuList.nativeElement.className.replace(' w3-show', '');
      this.menuList.nativeElement.previousElementSibling.className =
        this.menuList.nativeElement.previousElementSibling.className.replace(' w3-green', '');
      this.collection1Icon.nativeElement.className = 'fa fa-chevron-down pull-right';
    }
  }


  displaySubMenuList(): void {
    if (this.submenu.nativeElement.className.indexOf(' w3-show') === -1) {
      this.submenu.nativeElement.className += ' w3-show';
      this.menuIcon.nativeElement.className = 'fa fa-chevron-up pull-right';

    } else {
      this.submenu.nativeElement.className = this.submenu.nativeElement.className.replace(' w3-show', '');
      this.menuIcon.nativeElement.className = 'fa fa-chevron-down pull-right';
    }
  }

  onCollapseMenu(): void {
    if (this.state === 'text') {
      this.state = 'icon';
      this.homelabel = '';
      this.collection1 = '';

      this.logoutlabel = '';

      this.menubar.nativeElement.className += ' menubaricon';
      if (this.menuList.nativeElement.className.indexOf('w3-show') !== -1) {
        this.menuList.nativeElement.className = this.menuList.nativeElement.className.replace(' w3-show', '');
      }

      this.maincont.nativeElement.className = 'col-sm-11 mainContentMinpadding';
      this.collection1Icon.nativeElement.className = '';


    }
    else {
      this.showordersmenu();
      this.maincont.nativeElement.className = 'col-sm-10 mainContentpadding';
      this.collection1Icon.nativeElement.className = 'fa fa-chevron-down menuIconPosition';

    }
  }

  displayDomesticSubMenu(): void {
    if (this.submenu.nativeElement.className.indexOf('w3-hide') !== -1) {
      this.submenu.nativeElement.className = this.submenu.nativeElement.className.replace(' w3-hide', '');
    }
  }


  showordersmenu(): void {
    this.homelabel = 'Home';
    this.collection1 = 'Collection 1';

    this.logoutlabel = 'Logout';
    this.state = 'text';

    this.menubar.nativeElement.className = 'col-sm-2 menufixed';
  }

  searchCollapsedMethod() {
    this.searchCollapsed = !this.searchCollapsed;
  }
}
