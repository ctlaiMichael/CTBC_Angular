/**
 * 存款明細(定存)
 */
import { Injectable } from '@angular/core';
import { TelegramService } from '../../telegram/telegram.service';
import { PopupService } from '../global/popup.service';
import { LangTransService } from '../../pipe/langTransPipe/lang-trans.service';

@Injectable({
    providedIn: 'root'
  })
export class TDDetailInqRqService {

    constructor(
        public telegram: TelegramService,
        private popup: PopupService,
        private langTransService: LangTransService,
    ) { }

    /**
     * [API] 取得定存明細之上行電文 CCMPTX000184Rq
     * @param requestObj 
     * requestObj = {
     *  'Country': '', 帳戶國別
     *  'CustomerId': '', 帳戶統編
     *  'AcctNo': '', 帳戶號碼
     *  'AcctCur': '', 帳戶幣別
     * }
     */
    public getTDDetail(requestObj: Object) {
        // 取得並設定參數
        let value = {};
        const request = this.telegram.GetRequstParam('CCMPTX000184Rq');       
        request['Country'] = requestObj['Country'];
        request['CustomerId'] = requestObj['CustomerId'];
        request['AcctNo'] = requestObj['AcctNo'];
        request['AcctCur'] = requestObj['AcctCur'];
        
        // Call API
        return new Promise((resolve, reject) => {
            this.telegram.GetRespone(request).then(
                (res) => {
                    if (!res || res['Result'] !== 4001) {
                        reject(res);
                    } else {
                        // 取得成功
                        resolve(res);
                    }
                }, 
                (err) => {
                        reject(err);               
                }
            );              
        });
    }
}
