<script lang="ts">
	const item = {
		id: 123,
		value: '123,444,555',
		duration: 5,
		interest: '111,111',
		rate: 0.05,
		note: 'My Note',
	}
</script>

<div class="flex items-center justify-center">
	<div
		class="mt-5 grid w-[300px] grid-cols-2 rounded-md border-b-[5px] border-gray-400 bg-gray-200 p-3">
		<section class="col-span-2 [&_span]:px-1">
			<span>#1</span>
			<span>Note: </span>
		</section>
		<span>Gía Tiền:</span><span>{item.value}</span>
		<span>Số Ngày:</span><span>{item.duration}</span>
		<span>Tiền Lãi:</span><span>{item.interest}</span>
		<span>Lãi Suất:</span><span>{item.rate * 100}%</span>
		<span>Ghi chú:</span><span>{item.note}</span>
	</div>
</div>
