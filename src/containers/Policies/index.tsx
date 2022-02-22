import React from 'react'
import Header from 'components/common/Header'

const Polices: React.FC = () => {
  return (
    <div className="regulation">
      <Header title="プライバシーポリシー" showBtnBack />
      <div className="container">
        <div className="regulation-main">
          <h3 className="regulation-intro">
            ＿＿＿＿＿＿＿＿（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
          </h3>
          <div className="regulation-article">
            <h2 className="regulation-title">第1条（個人情報）</h2>
            <div className="regulation-content">
              「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </div>
          </div>
          <div className="regulation-article">
            <h2 className="regulation-title">第2条（個人情報の収集方法）</h2>
            <div className="regulation-content">
              当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
            </div>
          </div>
          <div className="regulation-article">
            <h2 className="regulation-title">第3条（個人情報を収集・利用する目的）</h2>
            <div className="regulation-content">
              当社が個人情報を収集・利用する目的は，以下のとおりです。
              <br />
              <br />
              当社サービスの提供・運営のため
              ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
              ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
              メンテナンス，重要なお知らせなど必要に応じたご連絡のため
              利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
              ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
              有料サービスにおいて，ユーザーに利用料金を請求するため 上記の利用目的に付随する目的
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Polices
