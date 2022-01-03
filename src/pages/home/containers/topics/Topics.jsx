import React from 'react';
import './topics.css';
import Icon from '../../../../assets/images/Icon.png'
import Topic from '../../components/topic/topic'


function Topics() {
    return (
        <div className='h247__topics'>
            <div className="h247__topics-wrapper">
                <div className='h247__topics-content'>
                    <h2>Kiến thức y tế cần biết</h2>
                    <p>1001 điều có thể bạn chưa biết về sức khỏe và cơ thể bạn. Hãy cùng H247 cập nhật để tự tin có một thân thể khỏe mạnh, dẻo dai nhé! </p>
                </div>
                <div className="h247__topics-container">
                    <div className='h247__topics-container_row'>
                        <Topic icon={Icon} title="Tim mạch" number={13} />
                        <Topic icon={Icon} title="Tiêu hóa" number={13}/>
                    </div>
                    <div className='h247__topics-container_row'>
                        <Topic icon={Icon} title="Nhi khoa" number={13} />
                        <Topic icon={Icon} title="Nội tiết" number={13} />
                        <Topic icon={Icon} title="Nam khoa" number={13}/>
                    </div>
                    <div className='h247__topics-container_row'>
                        <Topic icon={Icon} title="Phụ khoa" number={13} />
                        <Topic icon={Icon} title="Xương khớp" number={13}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topics