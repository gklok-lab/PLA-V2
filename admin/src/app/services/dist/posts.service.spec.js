"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var posts_service_1 = require("./posts.service");
describe('PostsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(posts_service_1.PostsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
