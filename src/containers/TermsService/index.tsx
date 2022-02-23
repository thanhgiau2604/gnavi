import React from 'react'
import Header from 'components/common/Header'

const TermsService: React.FC = () => {
  return (
    <div className="regulation">
      <Header title="利用規約" showBtnBack />
      <div className="container">
        <div className="regulation-main">
          <h3 className="regulation-intro">
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </h3>
          <div className="regulation-article">
            <h2 className="regulation-title">第1条（適用）</h2>
            <div className="regulation-content">
              本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
              本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
            </div>
          </div>
          <div className="regulation-article">
            <h2 className="regulation-title">第2条（利用登録）</h2>
            <div className="regulation-content">
              本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
              当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
              利用登録の申請に際して虚偽の事項を届け出た場合
              本規約に違反したことがある者からの申請である場合
              その他，当社が利用登録を相当でないと判断した場合
            </div>
          </div>
          <div className="regulation-article">
            <h2 className="regulation-title">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <div className="regulation-content">
              ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
              ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
              ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsService