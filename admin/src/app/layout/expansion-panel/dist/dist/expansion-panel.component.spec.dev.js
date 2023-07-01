"use strict";

exports.__esModule = true;

var testing_1 = require("@angular/core/testing");

var expansion_panel_component_1 = require("./expansion-panel.component");

describe('ExpansionPanelComponent', function () {
  var component;
  var fixture;
  beforeEach(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [expansion_panel_component_1.ExpansionPanelComponent]
    });
    fixture = testing_1.TestBed.createComponent(expansion_panel_component_1.ExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', function () {
    expect(component).toBeTruthy();
  });
});