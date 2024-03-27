import { Injectable, Controller, ForbiddenException } from '@nestjs/common';
import { CreateEvoServicesPostDto } from './dto/create-evo-services-post.dto';
import { UpdateEvoServicesPostDto } from './dto/update-evo-services-post.dto';
import { HttpService } from '@nestjs/axios';
import { env } from 'process';
import { catchError, map, tap } from 'rxjs';
import { Authenticate3D } from './interfaces/data-authenticate3d.interface';

@Injectable()
export class EvoServicesPostService {

  private readonly url_session = `${env.URL_EVO}/${env.MERCHANT_ID}/session`;
  private readonly merchant_id = env.MERCHANT_ID;
  private readonly merchant_pass = env.MERCHANT_PASS;

  private readonly urlEvo = env.EVO_URL;
  private readonly merchantId = env.MERCHANT_ID;
  private readonly merchantPass = env.MERCHANT_PASS;

  constructor(private http: HttpService){}

  async generateSession(): Promise<any> {
    
    const headers = {
      'Content-Type': 'application/json', // afaik this one is not needed
      'Authorization': 'Basic ' + btoa(`merchant.${this.merchant_id}` + ":" + this.merchant_pass)
    };

    return await this.http.post(`${this.urlEvo}/${this.merchantId}/session`,JSON.stringify({"session": {"authenticationLimit": 25}}),{ headers})
    .pipe(
      tap(res => console.log(res)),
      map(res =>{
        return res.data;
      }),
      catchError(()=> {
        throw new ForbiddenException('Api not Available')
      })
    );
  }

  async updateSession(dataReq: Authenticate3D): Promise<any> {
    const headers = {
      'Content-Type': 'application/json', // afaik this one is not needed
      'Authorization': 'Basic ' + btoa(`merchant.${this.merchant_id}` + ":" + this.merchant_pass)
    };
    let jsonData  = {"order":dataReq.order, "customer":dataReq.customer}
    console.log(jsonData)
    return await this.http.put(`${this.urlEvo}/${this.merchantId}/session/${dataReq.sessionid}`,JSON.stringify(jsonData),{ headers})
    .pipe(
      tap(res => console.log(res)),
      map(res =>{
        return res.data;
      }),
      catchError(error=> {
        throw new ForbiddenException('Api not Available: ' + error)
      })
    );
  }

  async initAuth3D(): Promise<any> {
    return await this.http.post(this.url_session)
    .pipe(
      map(res => {
        return res.data
      }),
      catchError(()=> {
        throw new ForbiddenException('Api not Available')
      })
    );
  }
  

  create(createEvoServicesPostDto: CreateEvoServicesPostDto) {
    return 'This action adds a new evoServicesPost';
  }

  findAll() {
    return `This action returns all evoServicesPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evoServicesPost`;
  }

  update(id: number, updateEvoServicesPostDto: UpdateEvoServicesPostDto) {
    return `This action updates a #${id} evoServicesPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} evoServicesPost`;
  }
}
