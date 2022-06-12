import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CountriesService } from './countries.service';
import { environment } from './../../../environments/environment';
import { HttpStatusCode } from '@angular/common/http';

fdescribe('CountriesService', () => {
  let service: CountriesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CountriesService);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('test for get countries', ()=> {
    it('should return a countries list', (doneFn)=> {
      const mockData = [
        {
          "name": "Afghanistan",
          "topLevelDomain": [
              ".af"
          ],
          "alpha2Code": "AF",
          "alpha3Code": "AFG",
          "callingCodes": [
              "93"
          ],
          "capital": "Kabul",
          "altSpellings": [
              "AF",
              "Afġānistān"
          ],
          "subregion": "Southern Asia",
          "region": "Asia",
          "population": 40218234,
          "latlng": [
              33,
              65
          ],
          "demonym": "Afghan",
          "area": 652230,
          "timezones": [
              "UTC+04:30"
          ],
          "borders": [
              "IRN",
              "PAK",
              "TKM",
              "UZB",
              "TJK",
              "CHN"
          ],
          "nativeName": "افغانستان",
          "numericCode": "004",
          "flags": {
              "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
              "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
          },
          "currencies": [
              {
                  "code": "AFN",
                  "name": "Afghan afghani",
                  "symbol": "؋"
              }
          ],
          "languages": [
              {
                  "iso639_1": "ps",
                  "iso639_2": "pus",
                  "name": "Pashto",
                  "nativeName": "پښتو"
              },
              {
                  "iso639_1": "uz",
                  "iso639_2": "uzb",
                  "name": "Uzbek",
                  "nativeName": "Oʻzbek"
              },
              {
                  "iso639_1": "tk",
                  "iso639_2": "tuk",
                  "name": "Turkmen",
                  "nativeName": "Türkmen"
              }
          ],
          "translations": {
              "br": "Afeganistão",
              "pt": "Afeganistão",
              "nl": "Afghanistan",
              "hr": "Afganistan",
              "fa": "افغانستان",
              "de": "Afghanistan",
              "es": "Afganistán",
              "fr": "Afghanistan",
              "ja": "アフガニスタン",
              "it": "Afghanistan",
              "hu": "Afganisztán"
          },
          "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
          "regionalBlocs": [
              {
                  "acronym": "SAARC",
                  "name": "South Asian Association for Regional Cooperation"
              }
          ],
          "cioc": "AFG",
          "independent": true
      }
      ]
      service.getCountries()
      .subscribe(data => {
        expect(data).toEqual(mockData)
        doneFn()
      })
      const url = `${environment.API_URL}all`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      expect(req.request.method).toEqual('GET');
    });
    it('should return the right message when the status code is 500', (doneFn) => {
      const msgError = '500 message';
      const mockError = {
        status: HttpStatusCode.InternalServerError,
        statusText: msgError
      };
      service.getCountries()
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Something is wrong on the server');
          doneFn();
        }
      });
      const url = `${environment.API_URL}all`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
    it('should return a message if the error code is not found', (doneFn) => {
      const msgError = 'Not Status';
      const mockError = {
        status: HttpStatusCode.Conflict,
        statusText: msgError
      };
      service.getCountries()
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Ups something went wrong');
          doneFn();
        }
      });
      const url = `${environment.API_URL}all`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
  });
  describe('test to get country by name', () => {
    it('should return a one country when submitting a name', (doneFn)=> {
      const mockData = [
        {
          "name": "Afghanistan",
          "topLevelDomain": [
              ".af"
          ],
          "alpha2Code": "AF",
          "alpha3Code": "AFG",
          "callingCodes": [
              "93"
          ],
          "capital": "Kabul",
          "altSpellings": [
              "AF",
              "Afġānistān"
          ],
          "subregion": "Southern Asia",
          "region": "Asia",
          "population": 40218234,
          "latlng": [
              33,
              65
          ],
          "demonym": "Afghan",
          "area": 652230,
          "timezones": [
              "UTC+04:30"
          ],
          "borders": [
              "IRN",
              "PAK",
              "TKM",
              "UZB",
              "TJK",
              "CHN"
          ],
          "nativeName": "افغانستان",
          "numericCode": "004",
          "flags": {
              "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
              "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
          },
          "currencies": [
              {
                  "code": "AFN",
                  "name": "Afghan afghani",
                  "symbol": "؋"
              }
          ],
          "languages": [
              {
                  "iso639_1": "ps",
                  "iso639_2": "pus",
                  "name": "Pashto",
                  "nativeName": "پښتو"
              },
              {
                  "iso639_1": "uz",
                  "iso639_2": "uzb",
                  "name": "Uzbek",
                  "nativeName": "Oʻzbek"
              },
              {
                  "iso639_1": "tk",
                  "iso639_2": "tuk",
                  "name": "Turkmen",
                  "nativeName": "Türkmen"
              }
          ],
          "translations": {
              "br": "Afeganistão",
              "pt": "Afeganistão",
              "nl": "Afghanistan",
              "hr": "Afganistan",
              "fa": "افغانستان",
              "de": "Afghanistan",
              "es": "Afganistán",
              "fr": "Afghanistan",
              "ja": "アフガニスタン",
              "it": "Afghanistan",
              "hu": "Afganisztán"
          },
          "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
          "regionalBlocs": [
              {
                  "acronym": "SAARC",
                  "name": "South Asian Association for Regional Cooperation"
              }
          ],
          "cioc": "AFG",
          "independent": true
      }
      ];
      const name = 'Afghanistan';
      service.getCountryForName(name)
      .subscribe(data => {
        expect(data).toEqual(mockData);
        doneFn()
      });
      const url = `${environment.API_URL}name/${name}`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      expect(req.request.method).toEqual('GET');
    });
    it('should return the right message when the status code is 500', (doneFn) => {
      const name = 'sadasdas';
      const msgError = '500 message';
      const mockError = {
        status: HttpStatusCode.InternalServerError,
        statusText: msgError
      };
      service.getCountryForName(name)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Something is wrong on the server');
          doneFn();
        }
      });
      const url = `${environment.API_URL}name/${name}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
    it('should return the right message when the status code is 404', (doneFn) => {
      const name = 'sadasdas';
      const msgError = '404 message';
      const mockError = {
        status: HttpStatusCode.NotFound,
        statusText: msgError
      };
      service.getCountryForName(name)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('The country was not found');
          doneFn();
        }
      });
      const url = `${environment.API_URL}name/${name}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
    it('should return a message if the error code is not found', (doneFn) => {
      const name = 'sadasdas';
      const msgError = 'Not status';
      const mockError = {
        status: HttpStatusCode.Conflict,
        statusText: msgError
      };
      service.getCountryForName(name)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Ups something went wrong');
          doneFn();
        }
      });
      const url = `${environment.API_URL}name/${name}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
  });
  describe('test to get countries by continent', () => {
    it('should return a countries by continent', (doneFn)=> {
      const mockData = [
        {
          "name": "Afghanistan",
          "topLevelDomain": [
              ".af"
          ],
          "alpha2Code": "AF",
          "alpha3Code": "AFG",
          "callingCodes": [
              "93"
          ],
          "capital": "Kabul",
          "altSpellings": [
              "AF",
              "Afġānistān"
          ],
          "subregion": "Southern Asia",
          "region": "Asia",
          "population": 40218234,
          "latlng": [
              33,
              65
          ],
          "demonym": "Afghan",
          "area": 652230,
          "timezones": [
              "UTC+04:30"
          ],
          "borders": [
              "IRN",
              "PAK",
              "TKM",
              "UZB",
              "TJK",
              "CHN"
          ],
          "nativeName": "افغانستان",
          "numericCode": "004",
          "flags": {
              "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
              "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
          },
          "currencies": [
              {
                  "code": "AFN",
                  "name": "Afghan afghani",
                  "symbol": "؋"
              }
          ],
          "languages": [
              {
                  "iso639_1": "ps",
                  "iso639_2": "pus",
                  "name": "Pashto",
                  "nativeName": "پښتو"
              },
              {
                  "iso639_1": "uz",
                  "iso639_2": "uzb",
                  "name": "Uzbek",
                  "nativeName": "Oʻzbek"
              },
              {
                  "iso639_1": "tk",
                  "iso639_2": "tuk",
                  "name": "Turkmen",
                  "nativeName": "Türkmen"
              }
          ],
          "translations": {
              "br": "Afeganistão",
              "pt": "Afeganistão",
              "nl": "Afghanistan",
              "hr": "Afganistan",
              "fa": "افغانستان",
              "de": "Afghanistan",
              "es": "Afganistán",
              "fr": "Afghanistan",
              "ja": "アフガニスタン",
              "it": "Afghanistan",
              "hu": "Afganisztán"
          },
          "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
          "regionalBlocs": [
              {
                  "acronym": "SAARC",
                  "name": "South Asian Association for Regional Cooperation"
              }
          ],
          "cioc": "AFG",
          "independent": true
      }
      ];
      const continent = 'America';
      service.getContinent(continent)
      .subscribe(data => {
        expect(data).toEqual(mockData);
        doneFn()
      });
      const url = `${environment.API_URL}continent/${continent}`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      expect(req.request.method).toEqual('GET');
    });
    it('should return the right message when the status code is 500', (doneFn) => {
      const continent = 'sadasdas';
      const msgError = '500 message';
      const mockError = {
        status: HttpStatusCode.InternalServerError,
        statusText: msgError
      };
      service.getContinent(continent)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Something is wrong on the server');
          doneFn();
        }
      });
      const url = `${environment.API_URL}continent/${continent}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
    it('should return the right message when the status code is 404', (doneFn) => {
      const continent = 'sadasdas';
      const msgError = '404 message';
      const mockError = {
        status: HttpStatusCode.NotFound,
        statusText: msgError
      };
      service.getContinent(continent)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('The continent does not exist');
          doneFn();
        }
      });
      const url = `${environment.API_URL}continent/${continent}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
    it('should return a message if the error code is not found', (doneFn) => {
      const continent = 'sadasdas';
      const msgError = 'Not Status';
      const mockError = {
        status: HttpStatusCode.Conflict,
        statusText: msgError
      };
      service.getContinent(continent)
      .subscribe({
        error: (err) => {
          expect(err).toEqual('Ups something went wrong');
          doneFn();
        }
      });
      const url = `${environment.API_URL}continent/${continent}`;
      const req = httpController.expectOne(url);
      req.flush(msgError, mockError);
    });
  });
});
