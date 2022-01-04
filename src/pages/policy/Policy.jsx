import React from "react";
import "./policy.css";
import { Collapse } from "antd";
import arrowup from "../../assets/images/Collapse-arrow-up.png";
import arrowdown from "../../assets/images/Collapse-arrow-down.png";
const { Panel } = Collapse;

function Policy() {
  const use = (
    <div className="policy__collapse-text-wrapper">
      <div className="policy__collapse-text">
        <h4>1.</h4>
        <div className="policy__collapse-text-content">
          <h4>Đăng ký và đăng nhập tài khoản</h4>
          <p>
            Khi đăng ký sử dụng tài khoản trên ứng dụng H247 và H247.vn , bạn
            cần cung các thông tin cá nhân một cách chính xác, đầy đủ và mới
            nhất. Tạo tài khoản. Khi đăng ký Tài khoản, bạn sẽ được yêu cầu cung
            cấp cho chúng tôi một số thông tin nhất định, bao gồm tên, số điện
            thoại di động, địa chỉ, và ngày sinh của bạn. Sau khi đăng ký thành
            công, chúng tôi sẽ cung cấp cho bạn một Tài khoản, bạn có thể truy
            cập bằng mật khẩu do bạn chọn.
            <br />
            <br />
            Việc bạn không duy trì thông tin chính xác, cập nhật và đầy đủ có
            thể dẫn đến việc bạn không thể nhận được Dịch vụ và / hoặc truy cập
            và sử dụng Tài khoản và Ứng dụng của bạn, đồng thời với việc chúng
            tôi chấm dứt Thỏa thuận này với bạn.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>2.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quyền truy cập, thu thập thông tin.</h4>
          <p>
            Bằng việc sử dụng ứng dụng H247, website H247.vn và cung cấp thông
            tin cá nhân cho chúng tôi, bạn đồng ý rằng chúng tôi có thể thu
            thập, sử dụng, xử lý và tiết lộ thông tin cá nhân đó theo các quy
            định của Mục 2 này.
            <br />
            <br />
            Bạn có thể xem lại và cập nhật thông tin cá nhân của mình trong Nền
            tảng H247 bằng cách mở Ứng dụng và truy cập trang “Cài đặt” cho Tài
            khoản của bạn.
            <br />
            <br />
            Bạn không có nghĩa vụ phải cung cấp thông tin cá nhân cho chúng tôi.
            Tuy nhiên, nếu bạn chọn giữ lại thông tin cá nhân được yêu cầu, bạn
            có thể không sử dụng được một số phần của Nền tảng H247 và bạn không
            thể nhận được Dịch vụ.
            <br />
            <br />
            Chúng tôi sử dụng thông tin cá nhân mà bạn cung cấp để: (a) cung cấp
            Nền tảng và cho phép chúng tôi cung cấp cho bạn các sản phẩm, dịch
            vụ và thông tin được cung cấp thông qua Nền tảng mà bạn yêu cầu; (b)
            cho phép Nhà cung cấp Dịch vụ cung cấp Dịch vụ; (c) quản lý Tài
            khoản của bạn và giao tiếp với bạn; (d) xác minh và thực hiện các
            khoản thanh toán mà bạn thực hiện thông qua Nền tảng; (e) cải thiện
            Nền tảng và tùy chỉnh nội dung hiển thị cho bạn; (f) phát triển, vận
            hành, cải tiến, cung cấp và duy trì các sản phẩm và dịch vụ của
            chúng tôi; (g) gửi cho bạn thông tin mà bạn có thể thấy hữu ích hoặc
            thông tin bạn yêu cầu từ chúng tôi, với điều kiện bạn đã cho biết
            rằng bạn không phản đối việc được liên hệ vì những mục đích đó; (h)
            thực thi Thỏa thuận này và các chính sách khác; (i) thực hiện các
            chức năng hoặc dịch vụ như được mô tả khác cho bạn tại thời điểm thu
            thập.
            <br />
            <br />
            Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với: (a) Nhà cung
            cấp dịch vụ, những người có thể xem thông tin nhất định về bạn thông
            qua Nền tảng H247; (b) các chi nhánh của chúng tôi và các nhà cung
            cấp dịch vụ bên thứ ba, những người hỗ trợ chúng tôi cung cấp Nền
            tảng và thực hiện các chức năng nhất định thay mặt chúng tôi; (c)
            các bên liên quan đến giao dịch liên quan đến việc mua, bán, cho
            thuê, sáp nhập hoặc hợp nhất hoặc bất kỳ hoạt động mua lại, xử lý
            hoặc tài trợ nào khác đối với hoạt động kinh doanh của chúng tôi
            hoặc một phần hoạt động kinh doanh của chúng tôi; (e) các bên khác
            nếu luật pháp yêu cầu làm như vậy hoặc nếu chúng tôi tin rằng việc
            tiết lộ đó là cần thiết để ngăn chặn gian lận hoặc tội phạm hoặc để
            bảo vệ Nền tảng hoặc các quyền, tài sản hoặc sự an toàn cá nhân của
            bất kỳ người nào.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>3.</h4>
        <div className="policy__collapse-text-content">
          <h4>Cam kết bảo mật thông tin</h4>
          <p>
            H247 cam kết giữ bí mật tất cả thông tin mà người dùng cung cấp cho
            H247 hoặc H247 thu thập từ người dùng và không tiết lộ với bất kỳ
            bên thứ ba nào trừ khi có yêu cầu từ Cơ quan Nhà nước có thẩm quyền.
            <br />
            <br />
            Chúng tôi có các biện pháp bảo mật hợp lý để bảo vệ chống lại việc
            mất mát, sử dụng sai và thay đổi thông tin cá nhân dưới sự kiểm soát
            của chúng tôi. Mặc dù chúng tôi sẽ sử dụng mọi nỗ lực hợp lý để ngăn
            chặn việc mất mát, lạm dụng hoặc thay đổi thông tin cá nhân của bạn,
            nhưng bạn nên nhớ rằng việc gửi thông tin qua internet không bao giờ
            hoàn toàn an toàn. Chúng tôi không thể đảm bảo tính bảo mật cho
            thông tin cá nhân mà bạn gửi thông qua Ứng dụng khi nó đang được
            chuyển qua internet và bất kỳ việc gửi nào như vậy đều do bạn tự
            chịu rủi ro.
            <br />
            <br />
            Nếu bạn có bất kỳ câu hỏi hoặc nhận xét nào về các hoạt động bảo vệ
            dữ liệu cá nhân của chúng tôi, vui lòng liên hệ với chúng tôi qua
            email theo địa chỉ
            <a href="https://www.google.com/search?q=contact%40deepcare.io&rlz=1C1GCEB_enVN984VN984&oq=contact%40deepcare.io&aqs=chrome..69i57j69i58.6387j0j4&sourceid=chrome&ie=UTF-8">
              contact@deepcare.io
            </a>
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>4.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quy định về các hành động không được phép</h4>
          <p>
            Bạn không được quyền xâm phạm, xâm nhập, tiếp cận, sử dụng hay tìm
            cách xâm phạm, xâm nhập, tiếp cận hoặc sử dụng bất kỳ phần nào trong
            máy chủ của chúng tôi, và/ hoặc bất kỳ khu vực dữ liệu nào nếu không
            được chúng tôi cho phép.
            <br />
            <br />
            Bạn không được quyền hoặc có các hành động nhằm hạn chế hoặc cấm
            đoán bất kỳ người dùng nào khác sử dụng các tiện ích trên nền tảng
            H247.
            <br />
            <br />
            Bạn không được quyền gửi lên hoặc truyền phát bất kỳ thông tin bất
            hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm,
            đe dọa, lăng mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức
            chung của xã hội dưới bất kỳ hình thức nào, bao gồm cả việc truyền
            bá hay khuyến khích những hành vi có thể cấu thành tội phạm hay vi
            phạm bất cứ điều khoản nào của luật pháp địa phương, quốc gia hay
            quốc tế. Chúng tôi tôn trọng quyền tự do ngôn luận, nhưng cũng bảo
            lưu việc có toàn quyền lược bớt, hoặc xóa bỏ một phần hoặc toàn bộ
            nội dung nào các bạn đưa lên, bất kể việc vi phạm đó là rõ ràng hay
            chỉ là hàm ý.
            <br />
            <br />
            Bạn không được phép gửi hoặc truyền bất kỳ thông điệp nào mang tính
            quảng cáo, mời gọi, thư dây chuyền, cơ hội đầu tư hay bất kỳ dạng
            liên lạc có mục đích thương mại nào mà người dùng không mong muốn,
            thư rác hay tin nhắn rác.
            <br />
            <br />
            Bạn không được gửi hoặc truyền bất kỳ thông tin nào không thuộc
            quyền sở hữu của bạn trừ khi đó là thông tin được cung cấp miễn phí,
            không gửi bất kỳ thông tin nào có chứa bất kỳ loại virus, Trojan, bọ
            hay các thành phần nguy hại nào.
            <br />
            <br />
            Bạn sẽ không gửi, xuất bản, truyền, tái sản xuất, phân phát hoặc
            khai thác bằng bất cứ hình thức nào với bất cứ thông tin nào có được
            từ H247 vào mục đích thương mại; hoặc tải lên, gửi, xuất bản,
            truyền, tái sản xuất hoặc phân phối dưới bất cứ hình thức nào những
            nội dung được bảo vệ bởi luật bản quyền và luật sở hữu trí tuệ của
            H247 hoặc tạo ra các biến thể của các nội dung đó mà không có sự
            đồng ý bằng văn bản của chủ nhân hoặc người giữ bản quyền.
            <br />
            <br />
            Bạn không được sử dụng thông tin trên các nền tảng này với bất cứ
            hình thức nào hoặc bất cứ mục đích nào, trừ những điều khoản được
            xác lập trong bản Quy định sử dụng này.
          </p>
        </div>
      </div>
    </div>
  );

  const payment = (
    <div className="policy__collapse-text-wrapper">
      <div className="policy__collapse-text">
        <h4>1.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quy trình xác nhận đơn hàng đã thanh toán</h4>
          <p>
            Khi người mua đặt hàng tại nền tảng H247 (website và ứng dụng) ,
            H247 sẽ nhận được yêu cầu đặt hàng và gửi đến người mua mã số đơn
            hàng kèm thông tin chi tiết về đơn hàng/dịch vụ. Tuy nhiên, yêu cầu
            đặt hàng cần thông qua một bước xác nhận đơn hàng, H247 chỉ xác nhận
            chính thức nếu như đơn vị cung cấp dịch vụ trên nền tảng H247 không
            có thay đổi/ chỉnh sửa về đơn hàng.
            <br />
            <br />
            Để yêu cầu đặt hàng được xác nhận nhanh chóng, quý khách vui lòng
            cung cấp đúng và đầy đủ các thông tin liên quan đến việc giao nhận,
            hoặc các điều khoản và điều kiện của chương trình khuyến mãi (nếu
            có) mà người mua tham gia.
            <br />
            <br />
            Sau khi đặt hàng thành công, người mua sẽ nhận được email tự động
            thông báo gửi về địa chỉ email/SĐT đã cung cấp, kèm tóm tắt thông
            tin đơn hàng và mã số đơn hàng. Mã số này sẽ được dùng để người mua
            theo dõi tình trạng đơn hàng, hoặc để thay đổi thông tin, hoặc hủy
            đơn hàng sau này.
            <br />
            <br />
            Nếu có sự thay đổi từ phía người bán, ví dụ trong tình trạng hết
            hàng, người mua sẽ nhận được thông báo từ Bộ phận Chăm sóc Khách
            hàng của H247.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>2.</h4>
        <div className="policy__collapse-text-content">
          <h4>Hướng dẫn đặt lịch hẹn và sử dụng dịch vụ</h4>
          <p>
            Quý khách hàng có thể đặt lịch hẹn sử dụng sản phẩm dịch vụ (SPDV)
            H247 theo các hình thức sau đây:
            <br />
            <br />
            <b>Cách số 1: </b>Đặt lịch hẹn trực tuyến trên Nền tảng H247, bao
            gồm website và ứng dụng di động H247
            <br />
            <br />
            <b>Cách số 2: </b>Gọi điện thoại tới số tổng đài 1900 068 856 và
            thực hiện hướng dẫn của tư vấn viên.
            <br />
            <br />
            Khách hàng vui lòng đọc kỹ thông tin SPDV được đăng tải trên các
            kênh thông tin của H247 bao gồm website, ứng dụng di động và kênh
            mạng xã hội chính thức. Trong trường hợp cần thiết vui lòng liên hệ
            tổng đài <a href="/#">1900 068 856</a> để kiểm tra hoặc xác nhận
            thông tin SPDV trước khi đặt hàng.
            <br />
            <br />
            <b>
              <i>
                Hướng dẫn đặt lịch hẹn trực tuyến trên Nền tảng công nghệ H247:
              </i>
            </b>
            <br />
            <br />
            - Khách hàng truy cập vào Nền tảng công nghệ H247 và lựa chọn SPDV,
            đặt lịch hẹn. đặt mua gói dịch vụ. Tiếp theo khách hàng vui lòng cập
            nhật/cung cấp thông tin theo mẫu yêu cầu.
            <br />
            <br />- Lựa chọn phương thức thanh toán và chọn thanh toán. - Nhân
            viên của chúng tôi sẽ liên lạc đến khách hàng thông qua số điện
            thoại vừa được cung cấp, nhằm kiểm tra và xác nhận lại thông tin đơn
            hàng, sẽ yêu cầu cung cấp thêm thông tin nếu cần thiết.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>3.</h4>
        <div className="policy__collapse-text-content">
          <h4>Phương thức thanh toán</h4>
          <p>
            Khách hàng có thể lựa chọn một trong các phương thức thanh toán sau
            đây:
            <br />
            <br />
            <b>Phương thức 1: </b>Thanh toán trực tiếp khi nhận dịch vụ trực
            tiếp tại cơ sở y tế / nhà cung cấp dịch vụ.
            <br />
            <br />
            <b>Phương thức 2: </b>Thanh toán trực tuyến thông qua cổng thanh
            toán (bằng thẻ tín dụng, thẻ ghi nợ, thẻ ATM nội địa, ví điện tử)
            khi thực hiện đặt lịch hẹn thông qua Nền tảng công nghệ của H247.
            <br />
            <br />- Trong trường hợp thanh toán trực tiếp tại cơ sở y tế, số
            tiền mà khách hàng cần thanh toán cho cơ sở y tế sẽ là bằng đúng số
            tiền ghi trong đơn hàng xác nhận đặt hẹn đối với các gói dịch vụ có
            giá niêm yết - đăng tải trên ứng dụng của H247. Khách hàng vui lòng
            tải ứng dụng của H247 từ Apple Store và CH Play hoặc từ website{" "}
            <a href="/#">https://h247.vn</a>.
            <br />
            <br />- Chúng tôi luôn nỗ lực tối đa để cung cấp thông tin về giá và
            chi phí chính xác nhất cho khách hàng. Các khoản về giá và chi phí
            có thể thay đổi tùy từng thời điểm. Chúng tôi sẽ cập nhật thường
            xuyên các thông tin về giá và chi phí trên Nền tảng công nghệ H247,
            Khách hàng vui lòng theo dõi thường xuyên để cập nhật thông tin mới
            nhất. Trường hợp có sai sót xảy ra hoặc giá và chi phí chưa được cập
            nhật kịp thời, chúng tôi sẽ liên hệ để hướng dẫn thay đổi và hỗ trợ
            khách hàng.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>4.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quy định đổi/Chuyển nhượng</h4>
          <p>
            - Khách hàng đã thanh toán SPDV chỉ được quyền đổi sang SPDV khác có
            giá trị bằng hoặc cao hơn (khách hàng bù phần tiền chênh lệch). Thời
            gian để chuyển đổi là 3 ngày làm việc kể từ ngày thanh toán.
            <br />
            <br />
            - Khách hàng được quyền chuyển nhượng SPDV cho người thân - bạn bè
            khi đã thanh toán SPDV. Thời gian để chuyển nhượng là 3 ngày làm
            việc kể từ ngày thanh toán.
            <br />
            <br />
            - SPDV không nằm trong danh mục hạn chế đổi/chuyển nhượng của H247.
            <br />
            <br />
            <span>
              <b>*** Lưu ý: </b>
            </span>
            <i>
              H247 sẽ không chấp nhận đổi/chuyển nhượng SPDV khi khách hàng đã
              sử dụng một phần trong gói dịch vụ cung cấp.
            </i>
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>5.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quy định chuyển đổi sang eVoucher (phiếu giảm giá điện tử)</h4>
          <p>
            - Đối với tất cả các Khách hàng đăng ký SPDV có hạng mục xét nghiệm
            và khám cận lâm sàng đã thanh toán và được lấy mẫu, có kết quả xét
            nghiệm tại cơ sở y tế liên kết: sau 30 ngày kể từ khi có kết quả xét
            nghiệm, khách hàng không đến khám tại các phòng khám liên kết với
            H247 thì phần dịch vụ chưa sử dụng sẽ được chuyển đổi thành eVoucher
            trị giá 500.000 đồng (Năm trăm ngàn đồng).
            <br />
            <br />
            - Đối với khách hàng đã thanh toán SPDV và chưa lấy mẫu xét nghiệm:
            khách hàng có thời hạn 30 ngày để sử dụng SPDV. Nếu sau 30 ngày,
            khách hàng vẫn chưa sử dụng SPDV thì số tiền đã thanh toán trên sẽ
            được chuyển đổi thành eVoucher có giá trị tương đương với số tiền đã
            thanh toán.
            <br />
            <br />
            <span>
              <b>*** Lưu ý: </b>
            </span>
            <i>
              eVoucher không có giá trị quy đổi thành Tiền mặt. Thời hạn sử dụng
              là 2 năm kể từ khi được phát hành.
            </i>
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>6.</h4>
        <div className="policy__collapse-text-content">
          <h4>
            Điều kiện và điều khoản sử dụng eVoucher (phiếu giảm giá điện tử)
          </h4>
          <p>
            - 01 eVoucher chỉ có giá trị thanh toán cho 01 SPDV và chỉ sử dụng
            01 lần duy nhất.
            <br />
            <br />
            - eVoucher chỉ áp dụng cho các SPDV của H247 hoặc SPDV cụ thể được
            thể hiện trên eVoucher.
            <br />
            <br />
            - eVoucher không có giá trị quy đổi thành tiền mặt. Khách hàng có
            thể được yêu cầu thanh toán thêm tiền nếu giá trị sử dụng lớn hơn
            giá trị eVoucher thể hiện. Khách hàng không được hoàn trả lại bằng
            tiền khi không sử dụng hết giá trị ghi trên eVoucher.
            <br />
            <br />
            - Khách hàng có trách nhiệm bảo mật thông tin của eVoucher sau khi
            nhận được. H247 sẽ không có trách nhiệm hoàn trả lại các eVoucher bị
            mất hoặc ở trạng thái “Đã sử dụng” với bất kì lí do gì.
            <br />
            <br />
            - Khách hàng không được bán lại / chuyển nhượng eVoucher.
            <br />
            <br />
            - Không áp dụng cùng lúc với các chương trình khuyến mãi khác.
            <br />
            <br />
            - Vui lòng đọc kĩ thông tin, thời hạn của eVoucher trước khi sử
            dụng.
            <br />
            <br />- Mọi thông tin cần hỗ trợ hoặc có thắc mắc vui lòng liên hệ
            tổng đài <a href="/#">1900 068 856</a>.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>7.</h4>
        <div className="policy__collapse-text-content">
          <h4>
            Điều kiện và điều khoản sử dụng eVoucher (phiếu giảm giá điện tử)
          </h4>
          <p>
            Các thông tin góp ý, khiếu nại cũng như yêu cầu của Khách hàng về
            SPDV của H247 vui lòng gửi thông tin theo hình thức sau:
            <br />
            <br />
            - Gọi điện thoại lên tổng đài CSKH 1900068856. Tổng đài viên sẽ ghi
            nhận thông tin và xử lý tối đa là 7 ngày làm việc.
            <br />
            <br />
            - Chúng tôi khuyến khích mọi ý kiến đóng góp của Khách hàng để cải
            thiện Nền tảng công nghệ H247 và chất lượng sản phẩm dịch vụ.
            <br />
            <br />
            <i>
              * Trong trường hợp khẩn cấp, Khách hàng vui lòng liên hệ cơ sở y
              tế gần nhất để được hỗ trợ kịp thời.
            </i>
            <br />
            <br />
            <i>
              * H247 có quyền từ chối hoặc hủy lịch hẹn của Khách hàng vì bất kỳ
              lý do gì và vào bất kỳ lúc nào, sẽ thông báo cho Khách hàng về
              việc hủy lịch hẹn đó.
            </i>
          </p>
        </div>
      </div>
    </div>
  );

  const cancel = (
    <div className="policy__collapse-text-wrapper">
      <div className="policy__collapse-text">
        <h4>1.</h4>
        <div className="policy__collapse-text-content">
          <h4>Chính sách hoàn/huỷ khi đặt mua dịch vụ/ sản phẩm</h4>
          <p>
            <b>a. </b>Là nền tảng kết nối, hỗ trợ kĩ thuật giữa cơ sở y tế và
            người bệnh. H247 không có chức năng trực tiếp hỗ trợ khách hàng về
            yêu cầu hoàn/ huỷ nhu cầu sử dụng sản phẩm/ dịch vụ.
            <br />
            <br />
            <b>b. </b>Khách hàng có nhu cầu huỷ/ hoàn tiền cho dịch vụ đã đăng
            ký vui lòng liên hệ trực tiếp tới đơn vị y tế cung cấp dịch vụ đã
            mua để được hỗ trợ tốt nhất.
          </p>
        </div>
      </div>
      <div className="policy__collapse-text">
        <h4>2.</h4>
        <div className="policy__collapse-text-content">
          <h4>Quy trình hoàn/huỷ khi đặt mua dịch vụ/ sản phẩm</h4>
          <p>
            <b>a. </b>Khách hàng liên hệ đến tổng đài cơ sở y tế để yêu cầu việc
            đổi/trả sản phẩm/ dịch vụ.
            <br />
            <br />
            <b>b. </b>Cơ sở y tế nhận yêu cầu và phản hồi khách hàng về quy trình giải
            quyết hỗ trợ hoàn/huỷ sản phẩm/ dịch vụ.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="policy max__width">
      <h1>Các điều khoản và chính sách</h1>
      <div className="policy__collapse">
        <Collapse
          bordered={false}
          expandIconPosition={"right"}
          expandIcon={({ isActive }) =>
            isActive ? (
              <img src={arrowup} alt="arrow" />
            ) : (
              <img
                src={arrowdown}
                alt="arrow"
              />
            )
          }
        >
          <Panel header="Điều khoản sử dụng" key="1">
            {use}
          </Panel>
          <Panel header="Chính sách thanh toán" key="2">
            {payment}
          </Panel>
          <Panel header="Chính sách hoàn hủy" key="3">
            {cancel}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default Policy;
